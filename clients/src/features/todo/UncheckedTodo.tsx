

export default function UncheckedTodo({todo, index}:{todo: any, index: any}) {
  return (
    <div key={index} className="flex justify-between mt-2 dark:text-white">
        <label>
            <div className="flex">
            <p className="ml-3">{todo.title}</p>
            </div>
        </label>
        <input type="checkbox" onChange={()=> {}}/>
    </div>
  )
}
