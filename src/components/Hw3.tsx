import React, { useEffect, useRef } from 'react'

export default function Hw3() {
    const focusButton = useRef<HTMLButtonElement>(null)
    useEffect(()=>{
        focusButton.current?.focus()
    })
  return (
    <div>
        <h2>Hw3</h2>
        <button ref={focusButton}>trang chu</button>
        <button>san pham</button>
        <button>gioi thieu</button>
        <button>lien he</button>
    </div>
  )
}
