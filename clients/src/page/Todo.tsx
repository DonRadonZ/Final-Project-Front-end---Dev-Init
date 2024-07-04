import { useState } from "react";
import AddEditTodo from "../features/todo/AddEditTodo";
import Modal from "react-modal";
import useTodoLocalStorage from "../features/todo/useTodoLocalStorage";
import TodoList from "../components/ui/TodoList";


export default function Todo() {
  const [todos, setTodos] = useTodoLocalStorage([], 'todos')
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDetail, setTodoDetail] = useState("");

  function handleTodoTitleChange(e) {
    setTodoTitle(e.target.value)
  }

  function handleTodoDetailsChange(e) {
    setTodoDetail(e.target.value)
  }

  function formatDate(date){
    return date.toDateString() + " " + date.toTimeString().split(" ")[0];
  }

  function addTodo() {
    if (todoTitle && todoDetail) {
      const todoDate = new Date();
      const formattedDate =  formatDate(todoDate);
      const updatedTodo = [...todos, { title: todoTitle, detail: todoDetail, date: formattedDate }];
      setTodos(updatedTodo);
      setTodoTitle('');
      setTodoDetail('');
    }
  }

  function editTodo(updatedTodo) {
    const newTodos = todos.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo);
    setTodos(newTodos);
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
      <TodoList onEdit={editTodo} todos={todos} />
      

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
          onClose={() => setOpenAddModal({ isShown: false, type: "add", data: null })}
          onTitleChange={handleTodoTitleChange}
          onDetailChange={handleTodoDetailsChange}
          todoTitle={todoTitle}
          todoDetail={todoDetail}
          onAddTodo={addTodo}
        />
      </Modal>
    </>
  )
}
