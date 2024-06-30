


export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
    <ul className="flex gap-8 items-center">
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
  )
}
