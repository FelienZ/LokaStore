import Recommendation from './Recommendation';
import Highlight from './Highlight';
import MostLiked from './MostLiked';
import BestSale from './BestSelling';
import NewProduct from './NewProduct';
export default function Content(){
    return(
        <section className="bg-white min-h-screen m-auto w-full text-white">
            <div className="content max-sm:m-0 ml-[18%] py-25 sm:px-8 px-2 flex flex-col gap-10">
                <Highlight/>
                <Recommendation/>
                <BestSale/>
                <MostLiked/>
                <NewProduct/>
            </div>
        </section>
    )
}

//style={{backgroundImage: `url(${JobChange})`, backgroundSize: 'cover',backgroundPosition: 'center'}}