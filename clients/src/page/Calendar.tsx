import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import Modal from "react-modal";
import AddEvent from "../features/calendar/AddEvent";



export default function CalendarPage() {
  const [openAddModal, setOpenAddModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
     
    <>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-4xl mb-4'>Calendar</h1>
        
        <button className="bg-white py-3 px-5 rounded-md" onClick={() => {setOpenAddModal({isShown: true, type:"add", data: null})}}>New Event</button>
      </div>
      <div className="w-full mt-5 rounded-lg p-10 bg-white">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        // weekends={false}
        height={665}
        // events={events}
        // eventContent={renderEventContent}
      />
      </div>
      <Modal
    isOpen={openAddModal.isShown}
    onRequestClose={() => {}}
    style={{
      overlay: {
        backgroundColor: "rgba(0,0,0,0.2)",
      },
    }}
    contentLabel=""
    className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 "
    >
      <AddEvent onClose={() => setOpenAddModal({isShown: false, type:"add", data: null})}/>
    </Modal>
    </>
    
  )
}
