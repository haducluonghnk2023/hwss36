import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
export default function Hw4() {
    const focusInput = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        focusInput.current?.focus()
    },[])
    console.log(1111111111);
    
  return (
    <div>
        <h2>Hw4</h2>
        <label htmlFor=""></label>
        <input ref={focusInput} type="text" placeholder='focus me...'/>
    </div>
  )
}
