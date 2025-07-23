import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
export default function HelloWorld(){
    return(
        <section className="w-full bg-[#3B4321] p-4 fixed top-0 flex items-center gap-5 justify-around z-40">
            <div className="title flex gap-3 items-center">
            <p className="sm:text-xl font-bold text-nowrap"><FontAwesomeIcon icon={faBagShopping} className='size-10'/> LokaStore</p>    
            </div>

             <ul className='w-fit gap-5 md:gap-10 p-2 md:flex items-center hidden'>
                <li>Home</li>
                <li>Explore</li>
                <li>Library</li>
            </ul>
            <div className="dataField flex gap-2 items-center text-gray-50">
            <input type="text" name="cariJudul" className="input bg-white md:w-100 w-fit text-gray-800 max-sm:hidden rounded-full text-center" placeholder="Cari Produk" />
            <div className="logo p-3 max-sm:p-2 bg-[#6A7452] flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='size-4'/>
            </div>    
            <div className="logo p-3 max-sm:p-2 bg-[#6A7452] flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faUser} className='size-4'/>
            </div>       
            </div>
        </section>
    )
}