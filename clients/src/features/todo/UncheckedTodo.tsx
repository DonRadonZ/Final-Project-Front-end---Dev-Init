

export default function UncheckedTodo({todo, index}) {
  return (
    <div key={index} className="flex justify-between mt-2">
        <label>
            <div className="flex">
            <p className="ml-3">{todo.title}</p>
            </div>
        </label>
        <input type="checkbox" onChange={()=> {}}/>
    </div>
  )
}
