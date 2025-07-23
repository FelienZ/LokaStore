import Card from "./template/Card"
import { dataNewProducts, tags } from "./scripts/dataNewProduct"
import Buttons from "./template/Button"
export default function NewProduct(){
    return(
        <section className="flex flex-col gap-2 justify-between">
            <p className="text-2xl font-bold text-base-200">New Products</p>
            <div className="button flex gap-2">
            <Buttons dataButton={tags}/>
            </div>
            <div className="flex w-full h-80 bg-[#2F3320]/60 rounded-lg p-3">
                <Card dataCards={dataNewProducts}/>
            </div>    
        </section>
        
    )
}