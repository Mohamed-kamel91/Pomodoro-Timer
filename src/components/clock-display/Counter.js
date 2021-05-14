import React, {useContext} from "react"
import {Context} from "../../Context"

function Counter() { 
  const {counterTitle, counterMins, counterSecs, playCounter} = useContext(Context)
 
  return (
    <div className="counter-wrapper">
      <div className={`counter-circle counter-circle--outer${playCounter && counterTitle === "Work" ? " outer-pulse" : playCounter && counterTitle === "Break" ? " grey-pulse" : ""}`}>
        <div className={`counter-circle counter-circle--middle${playCounter && counterTitle === "Work" ? " middle-pulse" : playCounter && counterTitle === "Break" ? " white-pulse" : ""}`} >
          <div className={`counter-circle counter-circle--inner${playCounter && counterTitle === "Work" ? " inner-pulse" : playCounter && counterTitle === "Break" ? " grey-pulse" : ""}`}>
            <span className="counter-title">{counterTitle}</span>
            <span className="counter-countdown">{counterMins}:{counterSecs}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter