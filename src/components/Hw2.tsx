import React, { useEffect, useState } from 'react'

export default function Hw2() {
    const [count,setCount] =useState<any>(0)
    const handleChange = () => {
        setCount(count+1)
    }
    useEffect(()=> {
        document.title = count
    })
  return (
    <div>
        <h2>Hw2</h2>
        <p>{count}</p>
        <button onClick={handleChange}>click</button>
    </div>
    
  )
}
