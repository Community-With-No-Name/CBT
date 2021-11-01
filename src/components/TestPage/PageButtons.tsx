import React from 'react'

export default function PageButtons({questions, moveToQuestion, qN}) {
    return (
        <>
            <div className="grid grid-cols-8 gap-1 px-3 py-8">
                {
                    questions?.map((question, i)=> (
                        <div onClick={()=>moveToQuestion(i)} className={`flex flex-col items-center justify-center w-10 h-10 col-span-1 ${qN===i ? "text-gray-800 bg-gray-50" : "text-white bg-gray-700" } border cursor-pointer`}>{i+1}</div>
                    ))
                }
    </div>
        </>
    )
}
