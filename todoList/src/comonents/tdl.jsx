import React from "react"

function Tdl() {
  return (
    <>
        <div className="border-slate-600 border-2  flex flex-col items-center justify-center w-8/12 h-2/3">
            <h1 className=" text-5xl text-slate-600 font-bold">TODO LIST</h1>
            <div className="flex flex-row w-4/5 mt-8">
              <input type="text" className="border-2 border-indigo-500 rounded-md rounded-r-none w-4/5 h-10 p-2"/>
              <button className="bg-indigo-500 text-white h-10 w-32 text-lg font-semibold rounded-md rounded-l-none">Submit</button>
            </div>
        </div>
    </>
  )
}

export default Tdl;
