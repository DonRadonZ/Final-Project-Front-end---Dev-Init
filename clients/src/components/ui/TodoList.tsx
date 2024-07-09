import TodoCard from "./TodoCard";

interface Todo {
  key: number;
  title: string;
  detail: string;
  date: string;
  isChecked: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: (index: number) => void;
  handleEdit: (todo: Todo) => void;
}

export default function TodoList({onDelete ,todos, handleEdit}: TodoListProps) {
  return (
    <div className="mt-20 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {todos.map((todo, index) => (
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
