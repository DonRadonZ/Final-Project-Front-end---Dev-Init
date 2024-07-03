import { useState } from "react";
import DatePicker from "react-datepicker";
import { HiXCircle } from "react-icons/hi2";

import "react-datepicker/dist/react-datepicker.css";

export default function AddEvent({onClose, eventTitle, eventDate}) {
    const [startDate, setStartDate] = useState(new Date());
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
          value={eventTitle}
          className="text-2xl text-slate-900 p-2
          bg-gray-200 outline-none rounded"
          placeholder="Type title here..."
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
      <label className="text-xs text-slate-400">DATE</label>
      <DatePicker value={eventDate} selected={startDate} onChange={(date) => setStartDate(date)} />

      <button className="bg-blue-500 w-full font-medium mt-5 p-3" onClick={() => {}}>
        ADD
      </button>
    </div>
    </div>
  )
}
