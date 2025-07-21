import Card from "./template/Card"
import { dataButton } from "./scripts/Button"
export default function BestSale(){
    return(
        <section className="flex flex-col gap-2 justify-between">
            <p className="text-2xl font-bold text-base-200">Best Sale</p>
            <div className="button flex gap-2">
            {dataButton.map(item =>(
            <button key={item.id} className="btn bg-indigo-500 border-none">{item.content}</button>    
            ))}
            </div>
            <div className="flex w-full h-80 bg-indigo-950/60 rounded-lg p-3">
                <Card/>
            </div>    
        </section>
        
    )
}