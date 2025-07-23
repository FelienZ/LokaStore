import { dataDrawer } from "./scripts/Drawer"
export default function Drawer(){
    return(
            <section className="drawer bg-[#535F3C]/65 backdrop-blur-md top-0 fixed left-0 bottom-0 w-[18%] max-sm:hidden flex justify-center">
                <ul className="content flex flex-col mt-20 items-center justify-evenly text-nowrap px-8">
                {dataDrawer.map(item=>(
                    <li key={item.id} className="cursor-pointer hover:bg-[#535F3C]/65 hover:rounded-md hover:px-2 text-shadow-sm text-shadow-black/30"> {item.title}</li>
                ))}
                </ul>
            </section>
    )
}