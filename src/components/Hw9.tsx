import React, { useEffect, useState } from 'react'

export default function Hw9() {
    const [elapsedTime,setElapsedTime] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setElapsedTime(elapsedTime+2)
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
        <h2>Hw9</h2>
        <p>thoi gian da troi qua {elapsedTime} giay</p>
    </div>
  )
}
