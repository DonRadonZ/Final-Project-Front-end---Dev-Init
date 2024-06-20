import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="flex justify-between items-center bg-cyan-200 uppercase px-4 py-3 border-b border-stone-200 sm:px-6">
         <Link to='/' className="tracking-widest">Clock Note</Link>   
         </header>
    )
}
