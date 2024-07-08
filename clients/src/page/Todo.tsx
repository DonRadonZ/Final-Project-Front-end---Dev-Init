import { useState } from "react";
import AddEditTodo from "../features/todo/AddEditTodo";
import Modal from "react-modal";
import useTodoLocalStorage from "../features/todo/useTodoLocalStorage";
import TodoList from "../components/ui/TodoList";
import Swal from "sweetalert2";


export default function Todo() {
  const [todos, setTodos] = useTodoLocalStorage([], 'todos')
  
  // const [editingTodo, setEditingTodo] = useState(null);
  const [searchTodo, setSearchTodo] = useState('');

  function handleSearch(e: any){
    setSearchTodo(e.target.value);
  }

  const [openAddModal, setOpenAddModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });



  const filterTodo = todos.filter((todo: {title: string}) => todo.title.toLowerCase().includes(searchTodo.toLowerCase()));

  function handleEdit(todoDetails: any) {
    setOpenAddModal({
      isShown: true,
      data: todoDetails,
      type: "edit",
    })
  }

  function deleteTodo(index: any){
    Swal.fire({
      title: "Delete Task",
      text: "Are you sure do you want to delete this task",
      icon: "warning",
      confirmButtonText:"Sure",
      confirmButtonColor: "Red",
      showCancelButton: true,
      cancelButtonText:"Cancel",
      cancelButtonColor:"Gray"
    }).then((result) => {
      if(result.isConfirmed){
        const newTodos = todos.filter((_: any, todo: any) => todo !== index);
      setTodos(newTodos);
      Swal.fire({
        title: "Delete Successful",
        text: "Your task delete successful",
        icon: "success"
      })
      }
    })    
  }

  return (
    <>
      <div className="flex items-center justify-between sm:flex-col md:flex-row gap-2">
      <h2 className="font-bold text-3xl lg:text-6xl dark:text-neutral-50">Todo List</h2>
      <input type="text" placeholder='search...' className='bg-neutral-300 dark:bg-slate-700 w-[800px] py-6 text-left pl-7 sm:mt-5 sm:w-[600px] rounded dark:text-neutral-100' value={searchTodo} onChange={handleSearch}/>
      <button className="bg-emerald-400 hover:bg-green-400 py-3 px-5 rounded-md sm:mt-5" onClick={() => {setOpenAddModal({isShown: true, type:"add", data: null})}}>Add Todo</button>
      </div>
      <div>
      <TodoList 
        // onEdit={editTodo} 
        todos={filterTodo} 
        onDelete={deleteTodo} 
        // editingTodo={editingTodo} 
        // setEditingTodo={setEditingTodo}
        handleEdit={handleEdit} />
      
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
      className="w-[75%] max-h-3/4 bg-white rounded-md mx-auto mt-[12.5%] p-5 lg:w-[40%] dark:bg-black"
      >
        <AddEditTodo
          type={openAddModal.type}
          onClose={() => setOpenAddModal({ isShown: false, type: "add", data: null })}
          todoData={openAddModal.data}
          todos={todos}
          setTodos={setTodos}
          setOpenAddModal={setOpenAddModal}
        />
      </Modal>
    </>
  )
}
