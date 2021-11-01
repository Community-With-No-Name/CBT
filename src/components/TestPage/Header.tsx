import React from 'react'

export default function Header() {
    return (
        <>
         <div className="flex justify-between px-6 pb-2">
          <h1 className="py-2 text-4xl font-extrabold uppercase">CHEM 101</h1>
          <p className="py-2 text-3xl font-bold">Time: 00:00</p>
        </div>
        <div className="flex justify-start px-6 pb-1">
          <h1 className="py-2 text-xl font-extrabold uppercase">Time Allowed: 40 Minutes</h1>
        </div>
        <div className="flex justify-start px-6 pb-5">
          <h1 className="py-2 text-xl font-extrabold capitalize">
            Instruction: answer all questions
          </h1>
        </div>   
        </>
    )
}
