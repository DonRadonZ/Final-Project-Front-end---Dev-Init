import TodoCard from "./TodoCard";


export default function TodoList({onDelete ,todos, handleEdit}: any) {
  return (
    <div className="mt-20 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {todos.map((todo: any, index: any) => (
      <TodoCard
        key={index}
        title={todo.title}
        detail={todo.detail}
        date={todo.date}
        onEdit={() => handleEdit(todo)}
        onDelete={() => onDelete(index)}
        isChecked={todo.isChecked}
      />
    ))}
    </div>
  )
}
