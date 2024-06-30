import { Link } from "react-router-dom";
import Navigation from "./Navigation";


export default function Header() {
    return (
        <header className="flex justify-between items-center bg-cyan-200 uppercase px-8 py-5 border-b border-stone-200 sm:px-6">
         <Link to='/' className="tracking-widest">Clock Note</Link>
         <Navigation/>   
         </header>
    )
}
