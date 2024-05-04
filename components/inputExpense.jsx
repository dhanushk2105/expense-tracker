import React from 'react'

function InputExpense() {
    return (
        <div className='flex w-full p-10 items-center justify-center gap-2'>
            <details class="dropdown">
                <summary class="m-1 btn">Category</summary>
                <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
            <input type="number" placeholder="Amount" className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-outline btn-success">Add</button>
        </div>
    )
}

export default InputExpense