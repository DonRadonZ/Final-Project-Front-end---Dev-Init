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

  function handleSearch(e){
    setSearchTodo(e.target.value);
  }

  const [openAddModal, setOpenAddModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });


  // function editTodo(updatedTodo) {
  //   const newTodos = todos.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo);
  //   setTodos(newTodos);

  //   console.log("test")
  // }

  const filterTodo = todos.filter((todo) => todo.title.toLowerCase().includes(searchTodo.toLowerCase()));

  function handleEdit(todoDetails: any) {
    setOpenAddModal({
      isShown: true,
      data: todoDetails,
      type: "edit",
    })
  }

  function deleteTodo(index){
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
      <div className="flex items-center justify-between">
      <h2 className="font-bold text-6xl">Todo List</h2>
      <input type="text" placeholder='search...' className='bg-white w-[800px] py-6 text-left pl-7' value={searchTodo} onChange={handleSearch}/>
      <button className="bg-white py-3 px-5 rounded-md" onClick={() => {setOpenAddModal({isShown: true, type:"add", data: null})}}>Add Todo</button>
      </div>
      <TodoList 
        // onEdit={editTodo} 
        todos={filterTodo} 
        onDelete={deleteTodo} 
        // editingTodo={editingTodo} 
        // setEditingTodo={setEditingTodo}
        handleEdit={handleEdit} />
      

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
        <AddEditTodo
          type={openAddModal.type}
          onClose={() => setOpenAddModal({ isShown: false, type: "add", data: null })}
          todoData={openAddModal.data}
          todos={todos}
          setTodos={setTodos}
          setOpenAddModal={setOpenAddModal}
          // onTitleChange={handleTodoTitleChange}
          // onDetailChange={handleTodoDetailsChange}
          // todoTitle={todoTitle}
          // todoDetail={todoDetail}
          // onAddTodo={addTodo}
        />
      </Modal>
    </>
  )
}
