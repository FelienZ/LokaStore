export default function Buttons({dataButton}){
    return(
        dataButton.map(item => (
            <button key={item.id} className="btn bg-[#535F3C] border-none">{item.content}</button>
        ))
    )
}