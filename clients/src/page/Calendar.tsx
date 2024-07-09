import { ChangeEvent, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';import interactionPlugin from '@fullcalendar/interaction';
import Modal from "react-modal";
import AddEvent from "../features/calendar/AddEvent";
import useCalendarLocalStorage from "../features/calendar/useCalendarLocalStorage";



export default function CalendarPage() {
  const [events, setEvents] = useCalendarLocalStorage([], 'calendar');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');

  const [openAddModal, setOpenAddModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  function handleEventTitle(e: ChangeEvent<HTMLInputElement>){
    setEventTitle(e.target.value);
  }

  function handleEventDate(e: ChangeEvent<HTMLInputElement>){
    setEventDate(e.target.value);
  }

  function newEvent(){
    if(eventTitle && eventDate){

      const updateEvent = [...events,{title: eventTitle, date: eventDate}];

      setEvents(updateEvent);
      setEventTitle('');
      setEventDate('');
      setOpenAddModal({
      isShown: false,
      type: "add",
      data: null,
  })
    }
  }

  return (
     
    <>
      <div className='flex justify-between items-center '>
        <h1 className='font-bold text-4xl mb-4 md:text-6xl dark:text-neutral-50'>Calendar</h1>
        
        <button className="bg-emerald-400 hover:bg-green-400 py-3 px-5 rounded-md" onClick={() => {setOpenAddModal({isShown: true, type:"add", data: null})}}>New Event</button>
      </div>
      <div className="w-full mt-5 rounded-lg p-10 bg-white relative z-0 dark:bg-black dark:text-white">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        height={665}
        events={events}
        // eventContent={renderEventContent}

      />
      </div>
      <Modal
    isOpen={openAddModal.isShown}
    onRequestClose={() => {}}
    style={{
      overlay: {
        backgroundColor: "rgba(0,0,0,0.5)",
      },
    }}
    contentLabel=""
    className="w-[75%] max-h-3/4 bg-white rounded-md mx-auto mt-[10%] p-10 z-10 lg:w-[40%] dark:bg-black"
    >
      <AddEvent 
      eventTitle={eventTitle} 
      eventDate={eventDate} 
      onClose={() => setOpenAddModal({isShown: false, type:"add", data: null})} 
      onDate={handleEventDate} 
      onTitle={handleEventTitle} 
      onEvent={newEvent}
      />
    </Modal>
    </>
    
  )
}
