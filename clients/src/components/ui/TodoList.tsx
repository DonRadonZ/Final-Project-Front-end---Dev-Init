import TodoCard from "./TodoCard";


export default function TodoList({onEdit, onOpen, onDelete ,todos}: any) {
  return (
    <div className="mt-20 grid gap-4 grid-cols-5">
    {todos.map((todo, index) => (
      <TodoCard
        key={index}
        title={todo.title}
        detail={todo.detail}
        date={todo.date}
        onEdit={() => onEdit(index)}
        onDelete={() => onDelete(index)}
      />
    ))}
    </div>
  )
}
