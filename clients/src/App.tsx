import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'

export default function App() {
  return (
    <div className="bg-white w-auto mt-5 shadow rounded-lg p-10">
    <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        // weekends={false}
        height={640}
        // events={events}
        // eventContent={renderEventContent}
      />
    </div>
  )
}


