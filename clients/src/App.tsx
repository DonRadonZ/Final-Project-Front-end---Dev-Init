import Calendars from "./components/ui/Calendars"


export default function App() {
  return (
    <div>
    <div className="flex justify-between flex-col md:flex-row md:gap-5 xl:gap-20 mx-6">
      
      <Calendars/>
      <div className="w-[500px]">
      <div className="flex justify-between gap-7">
      <div className="text-center bg-white w-full  h-48 rounded-md">Progress</div>
      <div className="text-center items-center bg-white
      w-full h-48 rounded-md">Reward</div>
      </div>
      <div className="text-center bg-white w-full mt-8 h-[600px] rounded-md">Todo</div>
      </div>
    </div>
    </div>
  )
}


