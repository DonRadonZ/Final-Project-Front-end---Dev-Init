export default function UncheckedTodo({todo, index, isChecked}:{todo: any, index: any, isChecked: boolean}) {
    return (
      <div key={index} className="flex justify-between mt-2 dark:text-white">
          <label>
              <div className="flex">
              {isChecked ? <p className="line-through ml-3">{todo.title}</p>:<p className="ml-3">{todo.title}</p> }
              
              </div>
          </label>
          
      </div>
    )
  }