import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataHighlight } from "./scripts/Highlight";
import { useState } from "react";
export default function Highlight(){
    const [currentIndex, nextIndex] = useState(0);
    const handlePrev = () =>{
        nextIndex((index) => (index -1 + dataHighlight.length)% dataHighlight.length);
    };
    const handleNext = () =>{
        nextIndex((index) => (index +1) % dataHighlight.length);
    };
    return(
        <div className="Hero relative grid sm:grid-cols-3 gap-2">
            <div className="carousel w-full relative h-80 sm:h-100 sm:col-span-2 bg-[#3B4321]/60 rounded-lg">
            {dataHighlight.map((item, index) =>{
                return(
                <div key={item.id} className={`carousel-item absolute w-full sm:h-100 h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-20"}}`} style={{backgroundImage: `url(${item.url})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
                    <div className="text text-shadow-lg self-end p-4 text-white drop-shadow-sm drop-shadow-base-200">
                    <p className='text-2xl font-bold max-sm:text-lg'>{item.title}</p>
                    <p>{item.desc}</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a onClick={handlePrev} className="btn btn-circle bg-[#3B4321] border-none">❮</a>
                    <a onClick={handleNext} className="btn btn-circle bg-[#3B4321] border-none">❯</a>
                    </div>
                </div>        
                )
            })}
            </div>
            <div className="announcement grid gap-2 max-sm:flex lg:grid-rows-2 w-full">
                <div className="top bg-[#2F3320]/60 flex rounded-lg p-4 size-full">
                    <div className="text-content self-end flex flex-col">
                    <p className='font-bold text-lg'>Announcement</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, harum.</p>    
                    </div> 
                </div>
                <div className="top bg-[#2F3320]/60 flex rounded-lg p-4 size-full">
                    <div className="text-content self-end flex flex-col">
                    <p className='font-bold text-lg'>Rules And Advice</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, harum.</p>    
                    </div> 
                </div>
            </div>
        </div>
    )
}