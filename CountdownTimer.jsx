import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter,setCounter] = useState(0);
  const [isPaused,setPaused] = useState(true);
  const inputRef = useRef();
 let timer = useRef();

  useEffect(() => {
    if(counter===0) {
      setPaused(true)
      clearTimeout(timer.current)
    }
    if(counter!==0 && !isPaused){
      timer.current = setTimeout(() => {
        setCounter(counter-1)
        if(counter===1){
          clearTimeout(timer.current);
        }
      },1000)
    }
    
  },[counter,isPaused])

  const startPauseCounter = () => {
    setPaused(!isPaused)
    if(!counter){
     setCounter(inputRef.current.value)
    }
  }
  return (
    <div className="App">
     <input type="text" ref={inputRef}/>
     <button onClick={startPauseCounter}>Start/Pause</button>
     <button onClick={() => setCounter(0)}>Reset Counter</button>
     {counter!==0 && <div>{`Countdown State: ${counter}`}</div>}
    </div>
  );
}
