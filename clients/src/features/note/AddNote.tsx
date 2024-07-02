import { HiXCircle } from "react-icons/hi2";


export default function AddNote({onClose}) {
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
          className="text-2xl text-slate-900 p-2
          bg-gray-200 outline-none rounded"
          placeholder="Type title here..."
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
      <label className="text-xs text-slate-400">Description</label>
        <textarea
        type="text"
        className="text-sm text-slate-900 outline-none bg-gray-200 p-2 rounded"
        placeholder="Write something here..."
        rows={10}
        />
      </div>

      <button className="bg-blue-500 w-full font-medium mt-5 p-3" onClick={() => {}}>
        ADD
      </button>
    </div>
  )
}
