import { dataDrawer } from "./scripts/Drawer"
export default function Drawer(){
    function handleScroll(e){
        if(e.target.id === 'Recommendation'){
            const item = document.getElementById('dataRecommend');
            if(item) item.scrollIntoView({behavior: "smooth"})
        }
        if(e.target.id === 'Best Sale'){
                const item = document.getElementById('dataBestSale');
                if(item) item.scrollIntoView({behavior: "smooth"})
            }
        if(e.target.id === 'New Products'){
                const item = document.getElementById('dataNew');
                if(item) item.scrollIntoView({behavior: "smooth"})
            }
    }
    return(
            <section className="drawer bg-[#535F3C]/65 backdrop-blur-md top-0 fixed left-0 bottom-0 w-[18%] max-sm:hidden flex justify-center">
                <ul className="content flex flex-col mt-20 items-center justify-evenly text-nowrap px-8">
                {dataDrawer.map(item=>(
                    <li key={item.id} onClick={(e)=> handleScroll(e)} id={item.title} className="cursor-pointer transition-all duration-200 hover:bg-[#535F3C]/65 hover:rounded-full hover:px-2 text-shadow-sm text-shadow-black/30"> {item.title}</li>
                ))}
                </ul>
            </section>
    )
}