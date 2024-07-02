import Calendars from "./components/ui/Calendars"


export default function App() {
  return (
    <div>
    <div className="flex justify-between flex-col md:flex-row md:gap-5 xl:gap-20 mx-6">
      
      <Calendars/>
      <div className="w-[500px]">
      <div className="flex justify-between gap-7">
      <div className="text-center bg-white w-full  h-48 rounded-md"><h1 className="text-xl mb-7 ">Progress</h1>
      <div className="radial-progress  text-orange-500" style={{ "--value": "70", "--size": "7rem" }}>
        70%</div></div>
      <div className="text-center items-center bg-white
      w-full h-48 rounded-md"><h1 className="text-xl">Reward</h1></div>
      </div>
      <div className="px-4 py-4 bg-white w-full mt-8 h-[600px] rounded-md"><h1 className="text-xl ">Today Activity</h1><hr className="mt-5"></hr>
      
      </div>
      </div>
    </div>
    </div>
  )
}


