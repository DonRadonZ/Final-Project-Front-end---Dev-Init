import DarkModeToggle from "./DarkModeToggle";



export default function Navigation() {
  return (
    <ul className=" gap-8 items-center hidden md:flex text-xl">
        <li>
            <DarkModeToggle/>
        </li>
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
    
  )
}
