import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'




export default function Calendars() {
  return (
    <div className="bg-white w-[84rem] shadow rounded-lg p-10">
    <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        // weekends={false}
        height={720}
        // events={events}
        // eventContent={renderEventContent}
      />
    </div>
  )
}
