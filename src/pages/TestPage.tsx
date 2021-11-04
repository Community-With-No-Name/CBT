/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from "components/Layout";
import Header from "components/TestPage/Header";
import NavButtons from "components/TestPage/NavButtons";
import PageButtons from "components/TestPage/PageButtons";
import Question from "components/TestPage/Question";
import React from "react";
import { Questions } from "utils/Questions";

export default function TestPage() {
    const [questions, setQuestions] = React.useState([...Questions])
    const [question, setQuestion] = React.useState(questions[0])
    const [questionNumber, setQuestionNumber] = React.useState(0)
    const [disablePrev, setDisablePrev] = React.useState(false)
    const [disableNext, setDisableNext] = React.useState(false)
    const handleNext = () => {
        questionNumber+1!==Questions.length && setQuestion(questions[questionNumber+1])
        questionNumber+1!==Questions.length && setQuestionNumber(questionNumber+1)
    }
    const handlePrev = () => {
        questionNumber-1!==0 && setQuestion(questions[questionNumber-1])
        questionNumber-1!==0 && setQuestionNumber(questionNumber-1)
    }
    const moveToQuestion = (qN: any) => {
        setQuestion(questions[qN])
        setQuestionNumber(qN)
    }
    const time = new Date();
  // time.setMinutes()
  time.setMinutes(75)
  return (
    // <Layout page="Test Page">
        <>
      {/* <div className="py-8 border-8 border-gray-900 max-w-7xl"> */}
      <div className="mt-24 max-w-7xl">
          <Header timeExpires={time} />
          <Question question={question} page={questionNumber} />
          <NavButtons handlePrev={handlePrev} handleNext={handleNext} />
          <PageButtons questions={questions} moveToQuestion={moveToQuestion} qN={questionNumber} />
      </div>
      {/* Start Page Buttons */}
      
    {/* End Page Buttons */}
    
    {/* Start Page Numbers */}
    {/* End Page numbers */}
      </>
    // </Layout>
  );
}
