import { useState } from "react";
import NoteList from "../components/ui/NoteList";
import AddEditNotes from "../features/note/AddEditNotes";
import Modal from "react-modal";
import useNoteLocalStorage from "../features/note/useNoteLocalStorage";
import Swal from "sweetalert2";


export default function Notes() {
  const [notes, setNotes] = useNoteLocalStorage([],'notes');
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  const [openAddModal, setOpenAddModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  function handleNoteTitleChange(e: any) {
    setNoteTitle(e.target.value);
  }

  function handleNoteDescriptionChange(e: any) { 
    setNoteDescription(e.target.value);
  }

  

  function formatDate(date: any){
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

  function onDeleteNote(index: any) {
    Swal.fire({
      title: "Delete Note",
      text: "Are you sure do you wnat to delete this note",
      icon: "warning",
      confirmButtonText:"Sure",
      confirmButtonColor: "Red",
      showCancelButton: true,
      cancelButtonText:"Cancel",
      cancelButtonColor:"Gray"
    }).then((result) => {
      if(result.isConfirmed){
        const newTodos = notes.filter((_: any, note: any) => note !== index);
      setNotes(newTodos);
      Swal.fire({
        title: "Delete Successful",
        text: "Your task delete successful",
        icon: "success"
      })
      }
    })
    
  }

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-6xl dark:text-neutral-50'>Note List</h1>
        
        <button className="bg-emerald-400 hover:bg-green-400 py-3 px-5 rounded-md" onClick={() => {setOpenAddModal({isShown: true, type:"add", data: null})}}>New Note</button>
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
    className="w-[75%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 lg:w-[40%] dark:bg-black"
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
    </div>
  )
}
