import { useState } from "react";
import NoteList from "../components/ui/NoteList";
import AddEditNotes from "../features/note/AddEditNotes";
import Modal from "react-modal";
import useNoteLocalStorage from "../features/note/useNoteLocalStorage";


export default function Notes() {
  const [notes, setNotes] = useNoteLocalStorage([],'notes');
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  const [openAddModal, setOpenAddModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  function handleNoteTitleChange(e) {
    setNoteTitle(e.target.value);
  }

  function handleNoteDescriptionChange(e) { 
    setNoteDescription(e.target.value);
  }

  

  function formatDate(date){
    return date.toDateString() + " " + date.toTimeString().split(" ")[0];
  }
  
  

  function addNewNote(){
    if (noteTitle && noteDescription){
      const noteDate = new Date();
      const formattedDate =  formatDate(noteDate);
      const updatedNotes = [...notes, { title: noteTitle, description: noteDescription, date: formattedDate}];
      setNotes(updatedNotes);
      setNoteTitle('');
      setNoteDescription('');
      setOpenAddModal({
    isShown: false,
    type: "add",
    data: null,
    })
    }
  }

  function onDeleteNote(index) {
    const newNotes = notes.filter((_: any,note: any) => note !== index)
    setNotes(newNotes);
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-6xl'>Note List</h1>
        
        <button className="bg-white py-3 px-5 rounded-md" onClick={() => {setOpenAddModal({isShown: true, type:"add", data: null})}}>New Note</button>
      </div>
    <NoteList notes={notes} onDelete={onDeleteNote}/>
    
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
        <AddEditNotes
          type={openAddModal.type}
          noteData={openAddModal.data}
          onClose={() => setOpenAddModal({ isShown: false, type: "add", data: null })}
          onTitleChange={handleNoteTitleChange}
          onDescriptionChange={handleNoteDescriptionChange}
          noteTitle={noteTitle}
          noteDescription={noteDescription}
          notes={notes}
          onAddNote={addNewNote}
        />
    </Modal>
    </>
  )
}
