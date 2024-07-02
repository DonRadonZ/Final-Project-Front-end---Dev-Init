import { useState } from "react";
import NoteList from "../components/ui/NoteList";
import AddNote from "../features/note/AddNote";
import Modal from "react-modal";


export default function Notes() {
  const [openAddModal, setOpenAddModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-6xl'>Note List</h1>
        
        <button className="bg-white py-3 px-5 rounded-md" onClick={() => {setOpenAddModal({isShown: true, type:"add", data: null})}}>New Note</button>
      </div>
    <NoteList/>
    
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
    <AddNote onClose={() => setOpenAddModal({isShown: false, type:"add", data: null})}/>
    </Modal>
    </>
  )
}
