import Card from "./template/Card"
import Buttons from "./template/Button"
import { dataBestSale, tags } from "./scripts/dataBestSale"
export default function BestSale(){
    return(
        <section className="flex flex-col gap-2 justify-between">
            <p className="text-2xl font-bold text-base-200">Best Sale</p>
            <div className="button flex gap-2">
            <Buttons dataButton={tags}/>
            </div>
            <div className="flex w-full h-80 bg-[#2F3320]/60 rounded-lg p-3">
                <Card dataCards={dataBestSale}/>
            </div>    
        </section>
        
    )
}