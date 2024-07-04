import TodoCard from "./TodoCard";


export default function TodoList({editTodo ,todos}: any) {
  return (
    todos.map((todo, index) => (
      <TodoCard key={index} title={todo.title} detail={todo.detail} date={todo.date} onEdit={editTodo} />
    ))
    
  )
}
