import { Calendar,momentLocalizer } from "react-big-calendar";

import moment from 'moment'


const localizer = momentLocalizer(moment)

export default function Calendars() {
  return (
    <div>
      
      <Calendar
      localizer={localizer}
      // events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{height:500, margin: "50px"}}
    />
    </div>
  )
}
