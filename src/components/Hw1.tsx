import React, { useEffect, useState } from 'react'

export default function Hw1() {
    const [title,setTitle] = useState<string>("")
    const changeTitle = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }
   useEffect(()=>{
    document.title=title
   })

  return (
    <div>
        <h2>Hw1</h2>
        <input type="text" onChange={changeTitle}/>
    </div>
  )
}
