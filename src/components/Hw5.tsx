import React, { useState } from 'react'
import { useEffect } from 'react';
export default function Hw5() {
    const [currentTime,setCurrentTime]= useState<any>(new Date());
    useEffect(()=>{
        setInterval(()=>{
            setCurrentTime(new Date());
        },1000)
    })
  return (
    <div>
        <h2>Hw5</h2>
        <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  )
}
