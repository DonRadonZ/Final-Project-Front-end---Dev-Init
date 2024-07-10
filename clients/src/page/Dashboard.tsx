import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import useCalendarLocalStorage from "../features/calendar/useCalendarLocalStorage";
import useTodoLocalStorage from "../features/todo/useTodoLocalStorage";
import UncheckedTodo from "../features/todo/UncheckedTodo";

export default function Dashboard() {
    const [todos] = useTodoLocalStorage([],'todos');
    const uncompletedTasks = todos.filter((todo: any) => !todo.isChecked).length;
    const [events] = useCalendarLocalStorage([], 'calendar');
  return (
    <div>
    <div className="flex justify-between flex-col mx-6 sm:flex-col md:flex-col lg:flex-row md:gap-5 xl:gap-20">
      
    <div className="bg-white w-[100%] max-w-[100%] shadow rounded-lg p-10 mb-6 dark:bg-black dark:text-white">
    <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'

        // weekends={false}
        height={720}
        events={events}
        // eventContent={renderEventContent}
      />
    </div>
      <div className="
       w-[450px]  md:w-[650px] lg:w-[750px]">
      <div className="flex justify-between gap-7">
      <div className="text-center bg-white dark:bg-black w-full  h-48 rounded-md shadow"><h1 className="text-xl mb-7  dark:text-white">Progress</h1>
      <h1 className="mt-10 text-6xl dark:text-white">
        {uncompletedTasks}</h1></div>
      <div className="text-center items-center bg-white
      w-full h-48 rounded-md shadow dark:bg-black dark:text-white"><h1 className="text-xl ">Reward</h1>
      <h2 className="mt-[4rem]">Travel Trip</h2></div>
      </div>
      <div className="px-4 py-4 bg-white w-full mt-8 h-[575px] rounded-md shadow dark:bg-black"><h1 className="text-xl dark:text-white">Today Activity</h1><hr className="mt-5"></hr>
      {todos.map((todo: any, index: any) => (
        <UncheckedTodo key={index} todo={todo} index={index} isChecked={todo.isChecked}/>
        ))}
      </div>
      </div>
    </div>
    </div>
  )
}
