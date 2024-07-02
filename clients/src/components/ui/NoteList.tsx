import NoteCard from "./NoteCard";


export default function NoteList() {
  return (
    <div className="mt-20 grid gap-4 grid-cols-5">
      <NoteCard title="New work" content="Lorem ipsum" date="02/07/2567" onEdit={()=> {}} onDelete={() => {}}/>
      <NoteCard title="New work" content="Lorem ipsum" date="02/07/2567" onEdit={()=> {}} onDelete={() => {}}/>
      <NoteCard title="New work" content="Lorem ipsum" date="02/07/2567" onEdit={()=> {}} onDelete={() => {}}/>
      <NoteCard title="New work" content="Lorem ipsum" date="02/07/2567" onEdit={()=> {}} onDelete={() => {}}/>
      <NoteCard title="New work" content="Lorem ipsum" date="02/07/2567" onEdit={()=> {}} onDelete={() => {}}/>
      <NoteCard title="New work" content="Lorem ipsum" date="02/07/2567" onEdit={()=> {}} onDelete={() => {}}/>
      <NoteCard title="New work" content="Lorem ipsum" date="02/07/2567" onEdit={()=> {}} onDelete={() => {}}/>
      <NoteCard title="New work" content="Lorem ipsum" date="02/07/2567" onEdit={()=> {}} onDelete={() => {}}/>
    </div>
  )
}
