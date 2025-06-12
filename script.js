const container = document.querySelector('.container');
const cari = document.getElementById('search');
const btnSearch = document.querySelector('.go');
const card = document.querySelectorAll('.card');
let list = document.querySelector('.list');


card.forEach(c=>{
    c.addEventListener('click',async function(){
        try{
            let check = c.getAttribute('id')
            console.log(check)
            let search = `${check}`;
            let isi = await showProduct(search);
            list.innerHTML = ""; 
            list.innerHTML = isi;
            list.style.display = 'grid'
        }catch(err){
            console.error(err)
        }
        
    })
})

function showProduct(category){
    let item = ''
    return fetch('https://fakestoreapi.com/products/' )
    .then(response=> response.json())
    .then(response => {
        response.map(r =>{
            if(r.category === category){
                item += getCard(r, 50);
            }
        })
        return item;
    })
}

function getCard(r){
    return `<div class="card">

             <div class="image">
                    <img src="${r.image}" alt="">
                </div>
                <div class="content">
                    <p class="nama">${r.title}</p>
                    <div class="overview">
                    <p class="harga">Price: $${r.price}</p>
                    <p class="rating">Rating: ${r.rating.rate} <i class="fa-solid fa-star"></i></p>
                    </div>
                </div>
            <button>Check!</button>

            </div>`
}

btnSearch.addEventListener('click', async function(){
    const keyword = cari.value.toLowerCase();
    let data = await fetch('https://fakestoreapi.com/products').then(res => res.json());
    let result = data.filter(item => item.title.toLowerCase().includes(keyword));
    let isi = result.map(r => getCard(r)).join('');
    list.innerHTML = isi;
    if(isi !== ''){
       list.style.display = 'grid'; 
    }else{
        alert('Barang tidak ditemukan!')
        list.style.display = 'none'
    }
    
});
