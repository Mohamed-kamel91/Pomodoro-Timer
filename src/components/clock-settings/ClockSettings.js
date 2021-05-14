import React, {useContext} from "react"
import WorkInterval from "./WorkInterval"
import BreakInterval from "./BreakInterval"
import {Context} from "../../Context"

function ClockSettings() { 
  const{isSettingsOpen, resetToDefaults} = useContext(Context)
  const isVisible = isSettingsOpen ? "visible" : "hidden"

  return (
    <div  className={`settings-container settings-${isVisible}`}>
      <WorkInterval isVisible={isVisible} />
      <BreakInterval isVisible={isVisible} /> 
      <p className={`reset-to-defaults rtd-${isVisible}`} onClick={resetToDefaults}>Reset to defaults</p>
    </div>
  )
}

export default ClockSettings