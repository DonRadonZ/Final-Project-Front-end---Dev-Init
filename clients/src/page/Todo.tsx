import { useEffect, useState } from "react";
import AddEditTodo from "../features/todo/AddEditTodo";
import Modal from "react-modal";


export default function Todo() {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDetails, setTodoDetails] = useState("");

  function handleTodoTitleChange(e) {
    setTodoTitle(e.target.value)
  }

  function handleTodoDetailsChange(e) {
    setTodoDetails(e.target.value)
  }


  const [openAddModal, setOpenAddModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <div className="flex items-center justify-between">
      <h2 className="font-bold text-6xl">Todo List</h2>
      <input type="text" placeholder='search...' className='bg-white w-[800px] py-6 text-left pl-7' />
      <button className="bg-white py-3 px-5 rounded-md" onClick={() => {setOpenAddModal({isShown: true, type:"add", data: null})}}>Add Todo</button>
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
        <AddEditTodo onClose={() => setOpenAddModal({ isShown: false, type: "add", data: null })} onTitleChange={handleTodoTitleChange} onDetailChange={handleTodoDetailsChange} todoTitle={todoTitle} todoDetails={todoDetails} />
      </Modal>
    </>
  )
}
