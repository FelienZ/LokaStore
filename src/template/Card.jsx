import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Card({dataCards}){
    return(
        <div className="content grid grid-cols-5 w-full xl:gap-5 gap-55 overflow-x-auto">
            {dataCards.map((data) => (
            <div key={data.id} className="card1 flex flex-col justify-between rounded-md bg-[#DDE3D0]/40 min-w-50 text-white p-4">
                <img src={data.url} alt="Thumbnail" className="h-35 rounded-lg"/>
                <div className="button flex flex-col gap-1">
                <p className="font-bold text-center">
                    {data.title}
                </p>
                <div className="flex items-center justify-between px-4">
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