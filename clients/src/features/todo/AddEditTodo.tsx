

import { useState } from 'react';
import { HiXCircle } from 'react-icons/hi2'

export default function AddEditTodo({
  onClose,
  // onTitleChange,
  // onDetailChange,
  todos,
  type,
  // todoDetails,
  setTodos,
  setOpenAddModal,
  todoData
}: any) {
  
  const [todoTitle, setTodoTitle] = useState(todoData?.title ||"");
  const [todoDetail, setTodoDetail] = useState(todoData?.detail || "");

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
      setOpenAddModal({
        isShown: false,
        type: "add",
        data: null,
      })
    }
  }

  function editTodo() {
    if (todoTitle && todoDetail) {
      const todoDate = new Date();
      const formattedDate =  formatDate(todoDate);
      const updatedTodo = [...todos, { title: todoTitle, detail: todoDetail, date: formattedDate }];
      setTodos(updatedTodo);
      setTodoTitle('');
      setTodoDetail('');
      setOpenAddModal({
        isShown: false,
        type: "add",
        data: null,
      })
    }
  }

  return (
    <div className="relative">
    <button
    className="w-10  absolute items-center justify-center  -top-3 -right-3 "
    onClick={onClose}
    >
        <HiXCircle className="text-4xl text-black z-10 hover:text-slate-500"/>
    </button>
      <div className="flex flex-col gap-2">
        <label className="text-xs text-slate-400">TITLE</label>
        <input
          type="text"
          value={todoTitle}
          onChange={handleTodoTitleChange}
          className="text-2xl text-slate-900 p-2
          bg-gray-200 outline-none rounded"
          placeholder="Type title here..."
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
      <label className="text-xs text-slate-400">DETAILS</label>
        <textarea
          type="text"
          value={todoDetail}
          onChange={handleTodoDetailsChange}
        className="text-sm text-slate-900 outline-none bg-gray-200 p-2 rounded resize-none"
        placeholder="Write something here..."
        rows={10}
        />
      </div>

      <button className="bg-blue-500 w-full font-medium mt-5 p-3" onClick={addTodo}>
        {type === "edit" ? "UPDATE": "ADD"}
      </button>
    </div>
  )
}
