import { dataDrawer } from "./scripts/Drawer"
export default function Drawer(){
    return(
            <section className="drawer bg-indigo-900/45 backdrop-blur-md top-0 fixed left-0 bottom-0 w-[18%] max-sm:hidden flex justify-center">
                <ul className="content flex flex-col mt-20 items-center justify-evenly text-nowrap px-8">
                {dataDrawer.map(item=>(
                    <li key={item.id}> {item.title}</li>
                ))}
                </ul>
            </section>
    )
}