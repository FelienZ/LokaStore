import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useRef, useState } from 'react';
export default function Navigation(){
    //vanilla Js -> masalah Event Handler di React
/*     function menuTrigger(){
        const navigasi = document.querySelector('.navigasi');
        const triggerBtn = document.querySelector('.logoBars');
        triggerBtn.addEventListener('click', ()=>{
            navigasi.classList.toggle('hidden')
            navigasi.classList.toggle('flex')
        })
    }
    function searchTrigger(){ 
        const inputField = document.querySelector('.inputUser');
        const title = document.querySelector('.title');
        const triggerSearch = document.querySelector('.logoSearch');
        triggerSearch.addEventListener('click', (e)=>{
            e.preventDefault()
            inputField.classList.toggle('max-sm:hidden')
            inputField.classList.toggle('max-sm:flex')
            title.classList.toggle('max-sm:hidden')
        })
    } */
    //di React -> pakai Hooks untuk state Management (di sini pakai useRef-> tunjuk v-DOM tanpa re-render, useEffect -> jalankan setelah render)
    const [inputVisibility, setInputVisibility] = useState(false);
    const inputReference = useRef(null);
    const menuReference = useRef(null);
    const toggleBtnSearch = ()=>{
        setInputVisibility(!inputVisibility)
    }
    const [menuVisibility, setMenuVisibility] = useState(false);
    const toggleBtnMenu = ()=>{
        setMenuVisibility(!menuVisibility)
    }

    useEffect(()=>{
        function handleInputOutside(e){
            if(inputReference.current && !inputReference.current.contains(e.target)){
                setInputVisibility(false)
            }
        }
        document.addEventListener("mousedown", handleInputOutside);
        return()=>{
            document.removeEventListener("mousedown", handleInputOutside)
        }
    },[])

    useEffect(()=>{
        function handleMenuOutside(e){
            if(menuReference.current && !menuReference.current.contains(e.target)){
                setMenuVisibility(false)
            }
        }
        document.addEventListener("click", handleMenuOutside);
        return()=>{
            document.removeEventListener("click", handleMenuOutside)
        }
    },[])

    return(
        <section className="w-full bg-[#3B4321] p-4 fixed top-0 flex items-center gap-5 justify-around z-40">
            <div className="title flex gap-3 items-center">
            <p className="sm:text-xl font-bold text-nowrap"><FontAwesomeIcon icon={faBagShopping} className="title size-10 "/> LokaStore</p>    
            </div>

             <ul className={`navigasi max-sm:w-full max-sm:flex-col max-sm:${menuVisibility ? 'flex' : 'hidden'}  max-sm:bg-[#3B4321] max-sm:justify-center text-center max-sm:top-15 max-sm:absolute max-sm:z-40 w-fit gap-5  md:gap-10 p-2 md:flex md:flex-row items-center hidden`}>
                <li>Home</li>
                <li>Explore</li>
                <li>Library</li>
            </ul>
            <div className="dataField flex gap-2 max-sm:px-2 items-center text-gray-50">
            <input type="text" name="cariJudul" placeholder='Cari Barang' ref={inputReference} className={`input inputUser text-center bg-white xl:w-100 w-70 text-gray-800 max-sm:${inputVisibility ? 'flex':'hidden' } max-sm:absolute max-sm:left-6 max-sm:w-[40%] rounded-full text-center" placeholder="Cari Produk`} />
            <div onClick={toggleBtnSearch} className={`logoSearch btn btn-circle border-none p-3 max-sm:p-2 bg-[#6A7452] flex items-center justify-center rounded-full`}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='size-4'/>
            </div>    
            <div className="logoUser dropdown btn btn-circle p-3 bg-[#6A7452] border-none flex items-center justify-center rounded-full">
                <FontAwesomeIcon tabIndex={0} role="button" icon={faUser} className='size-4 '/>
            <ul tabIndex={0} className="dropdown-content menu bg-[#6A7452] mt-40 rounded-box z-20 w-40 p-2 shadow-sm">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
            </div>
            <div onClick={toggleBtnMenu} ref={menuReference} className="logoBars btn btn-circle border-none p-3 max-sm:p-2 bg-[#6A7452] max-sm:flex hidden items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faBars} className='size-4'/>
            </div>
            </div>
        </section>
    )
}