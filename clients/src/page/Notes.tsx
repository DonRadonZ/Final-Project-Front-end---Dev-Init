import { useEffect, useState } from "react";
import NoteList from "../components/ui/NoteList";
import AddEditNotes from "../features/note/AddEditNotes";
import Modal from "react-modal";


export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  function handleNoteTitleChange(e) {
    setNoteTitle(e.target.value)
  }

  function handleNoteDescriptionChange(e) { 
    setNoteDescription(e.target.value)
  }

  const [openAddModal, setOpenAddModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  useEffect(function () { }, []);

  

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
        <AddEditNotes onClose={() => setOpenAddModal({ isShown: false, type: "add", data: null })} onTitleChange={handleNoteTitleChange} onDescriptionChange={handleNoteDescriptionChange} noteTitle={noteTitle} noteDescription={noteDescription} />
    </Modal>
    </>
  )
}
