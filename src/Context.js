import React, {useState, useEffect} from "react"
const Context = React.createContext()

function ContextProvider(props) {
  const[counterTitle, setCounterTitle] = useState("Work")
  const[counterMins, setCounterMins] = useState("")
  const[counterSecs, setCounterSecs] = useState("00")
  const[playCounter, setPlayCounter] = useState(false)
  const[isSettingsOpen, setIsSettingsOpen] = useState(false)
  const[workInterval, setWorkInterval] = useState(25)
  const[breakInterval, setBreakInterval] = useState(5)

  // 
  useEffect(() => {
    if(counterTitle === "Work" && counterMins === "00" && counterSecs === "00") {
      setPlayCounter(false)
      setTimeout(() => {
        setPlayCounter(true)
        setCounterTitle("Break")
        setCounterMins(breakInterval < 10 ? "0" + breakInterval : breakInterval + "")
      }, 3000);
    } else if(counterTitle === "Break" && counterMins === "00" && counterSecs === "00") {
      resetCounter()
    }
  }, [counterSecs])

  // Seconds starts countdown when play button is clicked
  useEffect(() => {
    let intervalId;
    if(playCounter) {
      intervalId = setInterval(() => {
        setCounterSecs(prevCounterSecs => {
          const secsNum = Number(prevCounterSecs)
          if(secsNum === 0) {
            setCounterMins(prevCounterMins => checkCounterMins(prevCounterMins))
            return "59"
          } else if(secsNum > 10) {
            return "" + (secsNum - 1)
          } else {
            return "0" + (secsNum - 1)
          }
        })
      }, 1000)
    }
    // clean up interval when pause btn is clicked
    return () => clearInterval(intervalId)
  }, [playCounter])

  // Counter mins changes as work interval changes if session is switched to "Work"
  useEffect(()=> {
    if(counterTitle === "Work") {
      setCounterMins(workInterval < 10 ? "0" + workInterval : workInterval + "")
      setCounterSecs("00")
    }
  }, [workInterval])

  // Counter mins changes as Break interval changes if session is switched to "Break"
  useEffect(()=> {
    if(counterTitle === "Break") {
      setCounterMins(breakInterval < 10 ? "0" + breakInterval : breakInterval + "")
      setCounterSecs("00")
    }
  }, [breakInterval])

  // COUNTER DISPLAY:
  // Reset Counter 
  function resetCounter() {
    setCounterTitle("Work")
    setCounterMins(workInterval < 10 ? "0" + workInterval : workInterval + "")
    setCounterSecs("00")
    setPlayCounter(false)
  }

  // Countdown when play button is clicked
  function countdown() {
    setPlayCounter(!playCounter)
  }
  
  // COUNTER SETTINGS:
  // Increment and decrement work interval 
  function ChangeWorkInterval(setInterval) {
    !playCounter && setWorkInterval(prevWorkInterval => checkIntervaL(setInterval, prevWorkInterval))
  }

  // Increment and decrement break interval 
  function ChangeBreakInterval(setInterval) {
    !playCounter && setBreakInterval(prevBreakInterval => checkIntervaL(setInterval, prevBreakInterval))
  }
    
  // Reset work/break intervals in settings
  function resetToDefaults() {
    if(!playCounter) {
      setWorkInterval(25)
      setBreakInterval(5)
    }
  }
  
  // HELPERS:
  // Adjust work and break interval so that they always stays between 1 & 60 
  function checkIntervaL(setInterval, currentInterval) {
    if(setInterval === "decrement" && currentInterval > 1) {
      return currentInterval - 1
    } else if(setInterval === "increment" && currentInterval < 60) {
      return currentInterval + 1
    } 
    return currentInterval
  }

  // Ajust counter mins when they are single digit
  function checkCounterMins(currentMin) {
    const minsNum = Number(currentMin)
    return minsNum > 10 ?  "" + (minsNum - 1) : "0" + (minsNum - 1) 
  }
  
  return (
    <Context.Provider 
      value={{
        resetCounter,
        counterTitle,
        counterMins,
        counterSecs,
        playCounter,
        countdown,
        isSettingsOpen,
        setIsSettingsOpen,
        workInterval,
        ChangeWorkInterval,
        breakInterval,
        ChangeBreakInterval,
        resetToDefaults
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}