import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import useCalendarLocalStorage from "./features/calendar/useCalendarLocalStorage";
import useTodoLocalStorage from "./features/todo/useTodoLocalStorage";
import UncheckedTodo from "./features/todo/UncheckedTodo";


export default function App() {
  const [todos] = useTodoLocalStorage([],'todos');
  // const uncompletedTasks = todos.filter(todo => todo.isChecked).length;
  const [events] = useCalendarLocalStorage([], 'calendar');

  return (
    <div>
    <div className="flex justify-between flex-col sm:flex-row md:flex-row md:gap-5 xl:gap-20 mx-6  ">
      
    <div className="bg-white w-[84rem] shadow rounded-lg p-10 ">
    <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        // weekends={false}
        height={720}
        events={events}
        // eventContent={renderEventContent}
      />
    </div>
      <div className="w-[500px] ">
      <div className="flex justify-between gap-7">
      <div className="text-center bg-white w-full  h-48 rounded-md"><h1 className="text-xl mb-7 ">Progress</h1>
      <div className="radial-progress  text-orange-500" style={{ "--value": "70", "--size": "7rem" }}>
        70%</div></div>
      <div className="text-center items-center bg-white
      w-full h-48 rounded-md"><h1 className="text-xl">Reward</h1></div>
      </div>
      <div className="px-4 py-4 bg-white w-full mt-8 h-[600px] rounded-md"><h1 className="text-xl ">Today Activity</h1><hr className="mt-5"></hr>
      {todos.map((todo, index) => (
        <UncheckedTodo key={index} todo={todo}/>
        ))}
      </div>
      </div>
    </div>
    </div>
  )
}


