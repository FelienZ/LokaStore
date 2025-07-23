import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataHighlight } from "./scripts/Highlight";
export default function Highlight(){
    return(
        <div className="Hero grid sm:grid-cols-3 gap-2">
            <div className="carousel w-full sm:col-span-2 bg-indigo-700/50 rounded-lg">
            {dataHighlight.map((item, index) =>{
                const prev = (index -1 + dataHighlight.length)% dataHighlight.length;
                const next = (index +1) % dataHighlight.length;
                return(
                <div key={item.id} id={`slide${item.id}`} className="carousel-item relative w-full h-80 flex" style={{backgroundImage: `url(${item.url})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
                    <div className="text text-shadow-lg self-end p-4 text-white drop-shadow-sm drop-shadow-base-200">
                    <p className='text-2xl font-bold max-sm:text-lg'>{item.title}</p>
                    <p>{item.desc}</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href={`#slide${dataHighlight[prev].id}`} className="btn btn-circle bg-[#3B4321] border-none">❮</a>
                    <a href={`#slide${dataHighlight[next].id}`} className="btn btn-circle bg-[#3B4321] border-none">❯</a>
                    </div>
                </div>        
                )
            })}
            </div>
            <div className="announcement grid gap-2 max-sm:flex lg:grid-rows-2 w-full">
                <div className="top bg-[#535F3C]/50 flex rounded-lg p-4 size-full">
                    <div className="text-content self-end flex flex-col">
                    <p className='font-bold text-lg'>Announcement</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, harum.</p>    
                    </div> 
                </div>
                <div className="top bg-[#535F3C]/50 flex rounded-lg p-4 size-full">
                    <div className="text-content self-end flex flex-col">
                    <p className='font-bold text-lg'>Rules And Advice</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, harum.</p>    
                    </div> 
                </div>
            </div>
        </div>
    )
}