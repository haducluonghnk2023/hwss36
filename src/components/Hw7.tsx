import React, { useState } from 'react'

export default function Hw7() {
    const [currentValue,setCurrentValue] = useState<number>(0)
    const [preValue,setPreValue] = useState<number>(0)
    const changeValue = ()=>{
        setCurrentValue(currentValue + 1)
        setPreValue(currentValue)
    }
  return (
    <div>
        <h2>Hw7</h2>
        <p>gia tri truoc:{preValue}</p>
        <p>gia tri hien tai:{currentValue}</p>
        <button onClick={changeValue}>click</button>
    </div>
  )
}
