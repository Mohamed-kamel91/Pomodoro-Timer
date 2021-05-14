import React from "react"
import ClockDisplay from "./components/clock-display/ClockDisplay" 
import ClockSettings from "./components/clock-settings/ClockSettings" 

function App() {
  return (
    <div className="wrapper">
      <ClockDisplay />
      <ClockSettings />
    </div>
  )
}

export default App