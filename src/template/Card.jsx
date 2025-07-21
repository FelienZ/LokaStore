import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Card(){
    return(
        <div className="content grid grid-cols-5 w-full xl:gap-5 gap-55 overflow-x-auto">
            <div className="card1 flex flex-col justify-between rounded-md bg-gray-900/30 min-w-50 text-white p-4">
                <img src="" alt="Thumbnail" />
                <div className="button flex flex-col gap-1">
                <p className="font-bold">
                    Product
                </p>
                <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400"/> 5
                </div>
                <p className="font-bold">Rp ....</p>
                <button className="btn btn-primary">View Product</button>
                </div>
            </div>
            <div className="card2 flex flex-col justify-between rounded-md bg-gray-900/30 min-w-50 text-white p-4">
                <img src="" alt="Thumbnail" />
                <div className="button flex flex-col gap-1">
                <p className="font-bold">
                    Product
                </p>
                <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400"/> 5
                </div>
                <p className="font-bold">Rp ....</p>
                <button className="btn btn-primary">View Product</button>
                </div>
            </div>
            <div className="card3 flex flex-col justify-between rounded-md bg-gray-900/30 min-w-50 text-white p-4">
                <img src="" alt="Thumbnail" />
                <div className="button flex flex-col gap-1">
                <p className="font-bold">
                    Product
                </p>
                <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400"/> 5
                </div>
                <p className="font-bold">Rp ....</p>
                <button className="btn btn-primary">View Product</button>
                </div>
            </div>
            <div className="card4 flex flex-col justify-between rounded-md bg-gray-900/30 min-w-50 text-white p-4">
                <img src="" alt="Thumbnail" />
                <div className="button flex flex-col gap-1">
                <p className="font-bold">
                    Product
                </p>
                <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400"/> 5
                </div>
                <p className="font-bold">Rp ....</p>
                <button className="btn btn-primary">View Product</button>
                </div>
            </div>
            <div className="card5 flex flex-col justify-between rounded-md bg-gray-900/30 min-w-50 text-white p-4">
                <img src="" alt="Thumbnail" />
                <div className="button flex flex-col gap-1">
                <p className="font-bold">
                    Product
                </p>
                <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400"/> 5
                </div>
                <p className="font-bold">Rp ....</p>
                <button className="btn btn-primary">View Product</button>
                </div>
            </div>
        </div>
    )
}