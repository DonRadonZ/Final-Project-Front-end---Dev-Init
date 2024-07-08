import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-blue-100 dark:bg-blue-700 dark:text-white p-4">
        <div className="flex items-center justify-between">
        <div className="flex items-center">
        <img src="/Clock_Note_App_LOGO.png" alt=""  className="w-16 mt-1"/>
         <Link to='/' className="tracking-widest text-2xl">Clock Note</Link>
        </div>
        <div className="md:hidden">
            <button id="menu-toggle" className="text-black hover:text-slate-500" onClick={toggleMenu}>
            <HiBars3 className="text-4xl"/>
            </button>
            </div>
        
         
         <Navigation/>
         
         </div>
         {/*Mobile Nav */}
         {isMenuOpen ? (
         <nav className="md:flex md:flex-col text-xl">
         <ul >
             <li>
                 <a href="/">Dashboard</a>
             </li>
             <li>
                 <a href="/calendar">Calendar</a>
             </li>
             <li>
                 <a href="/todo">Todo</a>
             </li>
             <li>
                 <a href="/notes">Note</a>
             </li>
         </ul>
         </nav>
        ): null
        }
         </nav>
    )
}
