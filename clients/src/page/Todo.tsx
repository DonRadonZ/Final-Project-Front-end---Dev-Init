

export default function Todo() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-6xl">Todo List</h2>
      <input type="text" placeholder='search...' className='bg-white w-[800px] py-6 text-left pl-7' />
      <a href="" className="bg-white py-3 px-5 rounded-md">Add Todo</a>
    </div>
  )
}
