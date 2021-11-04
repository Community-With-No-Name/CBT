import React from 'react'

export default function Question({question, page}) {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    alert(e.target.value)
  }
    return (
        <>
         <div className="flex justify-start px-6 pb-1">
          <h1 className="py-2 text-xl font-extrabold capitalize">Question {page+1}</h1>
        </div>
        <div className="flex justify-start px-6 pb-3">
          <h1 className="py-2 py-5 text-xl italic font-semibold">
            {question?.question}
          </h1>
        </div>
        <div className="flex justify-start px-6">
          <div className="py-5 text-lg">
            {
              question?.options.map(option=>(
            <div className="py-2">
                <div className="text-xl font-extrabold">Option A</div>
              <input type="radio" onChange={handleChange} className="text-gray-700" name={question.question} value={option} />
              <label htmlFor="" className="ml-4 font-lg">{option}</label>
            </div>
              ))
            }
            
          </div>
        </div>   
        </>
    )
}
