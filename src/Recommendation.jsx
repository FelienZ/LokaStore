import Card from "./template/Card"
import { dataRecommendation, tags } from "./scripts/dataRecommendation"
import Buttons from "./template/Button"
export default function Recommendation(){
    return(
        <section className="flex flex-col gap-2 justify-between">
            <p className="text-2xl font-bold text-[#3B4321]">Recommendations</p>
            <div className="button flex gap-2">
            <Buttons dataButton={tags}/>
            </div>
            <div className="flex w-full h-fit bg-[#2F3320]/60 rounded-lg p-3">
                <Card dataCards={dataRecommendation}/>
            </div>       
        </section>
        
    )
}