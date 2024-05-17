import React, { useEffect, useState } from 'react'

export default function Hw12() {
    const [seconds,setSeconds] = useState<number>(0)
    const [isActive,setIsActive] = useState<boolean>(false)
    useEffect(()=> {
        let interval:number | undefined = undefined;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(second => second + 1)
            }, 0,1)
        }else if (isActive && seconds !== 0) {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    })  
        
    const handleStart = () => {
        setIsActive(true);
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setSeconds(0);
    };


  return (
    <div>
        <h2>Hw12</h2>
        <p>dem thoi gian:{seconds} </p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
