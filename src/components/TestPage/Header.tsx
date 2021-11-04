import React from 'react'
import { useStopwatch, useTimer } from 'react-timer-hook'

export default function Header({timeExpires}) {
  // const time = new Date();
  // time.setSeconds(time.getSeconds() + 600)
  // const timeExpires = time
  // const {
  //   minutes,
  //   seconds,
  //   hours
  // } = useStopwatch({autoStart: true})
  const {
    minutes,
    seconds,
    hours
  } = useTimer({expiryTimestamp: timeExpires, onExpire: () => alert("Time Expired")})
    return (
        <>
         <div className="flex justify-between px-6 pb-2">
          <h1 className="py-2 text-3xl font-extrabold uppercase">CHEM 101</h1>
          <p className="py-2 text-2xl font-bold">Time: {hours}:{minutes}:{seconds}</p>
        </div>
        <div className="flex justify-start px-6 pb-1">
          <h1 className="py-2 text-lg font-extrabold uppercase">Time Allowed: 40 Minutes</h1>
        </div>
        <div className="flex justify-start px-6 pb-5">
          <h1 className="py-2 text-lg font-extrabold capitalize">
            Instruction: answer all questions
          </h1>
        </div>   
        </>
    )
}
