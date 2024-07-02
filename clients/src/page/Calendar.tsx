
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';



export default function CalendarPage() {
  return (
     
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-4xl mb-4'>Calendar</h1>
        
        <a href="" className="bg-white py-3 px-5 rounded-md">New Event</a>
      </div>
      <div className="w-full mt-5 rounded-lg p-10 bg-white">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        // weekends={false}
        height={640}
        // events={events}
        // eventContent={renderEventContent}
      />
      </div>
    </div>
    
  )
}
