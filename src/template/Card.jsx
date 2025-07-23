import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Card({dataCards}){
    return(
        <div className="content grid grid-cols-5 w-full xl:gap-5 gap-55 overflow-x-auto">
            {dataCards.map((data) => (
            <div key={data.id} className="card1 flex flex-col justify-between rounded-md bg-[#DDE3D0]/40 min-w-50 gap-2 text-white p-3">
                <img src={data.url} alt="Thumbnail" className="h-40 rounded-lg"/>
                <div className="button flex flex-col gap-2 text-shadow-sm text-shadow-black/20">
                <p className="font-bold text-center flex items-center h-10">
                    {data.title}
                </p>
                <div className="flex items-center justify-between px-2">
                    <p className="">{data.Price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</p>
                    <p><FontAwesomeIcon icon={faStar} className="text-yellow-400"/> {data.Rating}</p>
                </div>
                <button className="btn border-none bg-[#3B4321]">View Product</button>
                </div>
            </div>
            ))}
        </div>
    )
}