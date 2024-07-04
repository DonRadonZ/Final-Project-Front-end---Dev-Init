

export default function ConfirmDelete() {
    return (
        <div className="w-[40rem] flex flex-col gap-5">
            <h3 className="text-2xl font-medium">Delete</h3>
            <p>Do you want to Delete this ?</p>
            <div>
                <button>Cancel</button>
                <button className='bg-red-700 text-red-100 px-[1.6rem] py-[1.2rem]'>Delete</button>
            </div>
        </div>
    )
}
