import React, {useContext} from "react"
import {Context} from "../../Context"

function BreakInterval({isVisible}) { 
  const{breakInterval, ChangeBreakInterval} = useContext(Context)

  return (
    <div className={`interval-wrapper break-int-${isVisible}`}>
      <span className="interval-title">Short Break</span>
      <div className="interval-controls">
        <span className="interval-minus" onClick={() => ChangeBreakInterval("decrement")}>-</span>
        <span className="interval-num">{breakInterval}</span>
        <span className="interval-plus" onClick={() => ChangeBreakInterval("increment")}>+</span>
      </div>
    </div>
  )
}

export default BreakInterval