import Calendars from "./components/ui/Calendars"


export default function App() {
  return (
    <div>
    <div className="flex justify-center flex-col md:flex-row md:gap-5 xl:gap-20">
      
      <Calendars/>
      <div className="bg-white">Todo</div>
    </div>
    </div>
  )
}


