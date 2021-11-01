import React from 'react'

export default function Question({question, page}) {
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
            <div className="py-2">
                <div className="text-xl font-extrabold">Option A</div>
              <input type="radio" className="text-gray-700" name="answer" value={question.options[0].option} id={question?.question_id} />
              <label htmlFor="" className="ml-4 font-lg">{question.options[0].option}</label>
            </div>
            <div className="py-2">
                <div className="text-xl font-extrabold">Option B</div>
              <input type="radio" className="text-gray-700" name="answer" value={question.options[1].option} id={question?.question_id} />
              <label htmlFor="" className="ml-4 font-lg">{question.options[1].option}</label>
            </div>
            <div className="py-2">
                <div className="text-xl font-extrabold">Option C</div>
              <input type="radio" className="text-gray-700" name="answer" value={question.options[2].option} id={question?.question_id} />
              <label htmlFor="" className="ml-4 font-lg">{question.options[2].option}</label>
            </div>
            <div className="py-2">
                <div className="text-xl font-extrabold">Option D</div>
              <input type="radio" className="text-gray-700" name="answer" value={question.options[3].option} id={question?.question_id} />
              <label htmlFor="" className="ml-4 font-lg">{question.options[3].option}</label>
            </div>
          </div>
        </div>   
        </>
    )
}
