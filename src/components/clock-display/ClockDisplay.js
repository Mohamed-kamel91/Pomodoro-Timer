import React from "react"
import Counter from "./Counter"
import Controls from "./Controls"

function ClockDisplay() { 
  return (
    <div className="clock-container">
      <Counter />
      <Controls />
    </div>
  )
}

export default ClockDisplay