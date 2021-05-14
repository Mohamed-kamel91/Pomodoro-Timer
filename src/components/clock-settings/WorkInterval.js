import React, {useContext} from "react"
import {Context} from "../../Context"

function WorkInterval({isVisible}) { 
  const{workInterval, ChangeWorkInterval} = useContext(Context)

  return (
    <div className={`interval-wrapper work-int-${isVisible}`}>
      <span className="interval-title">Work</span>
      <div className="interval-controls">
        <span className="interval-minus" onClick={() => ChangeWorkInterval("decrement")}>-</span>
        <span className="interval-num">{workInterval}</span>
        <span className="interval-plus" onClick={() => ChangeWorkInterval("increment")}>+</span>
      </div>
    </div>
  )
}

export default WorkInterval