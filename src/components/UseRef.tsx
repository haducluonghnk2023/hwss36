import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [count,setCount] =useState<number>(0)
    const useRef1 = useRef(0)
    const focusInput = useRef<HTMLInputElement>(null)
    console.log("11111",useRef1);
    

    let index =0 
    const handleClick = () => {
        index++;
        setCount(count+1)
        useRef1.current = useRef1.current+1
    }
    console.log(useRef1.current);
    useEffect(()=>{
        focusInput.current?.focus()
    },[])
  return (
    <div>UseRef
        {/* Nó là hook react cung cấp
         cách dùng:import vào dùng
         kết quả trả về của useref là 1 đối tượng
         trong đối tượng đó có 1 thuộc tính mặc định 
         là current
         no co 2 cach dung
         1. khi mỗi lần component re-render thì nó không tạo ra 1 referentype mà
         vẫn giữ nguyên giá trị referentype ban đầu
         2. giúp mặc định focus vào ô input mà mình muốn */}
         <label htmlFor="">nhap email</label>
         <input ref={focusInput} type="text" />
         <label htmlFor="">nhap password</label>
         <input type="text" />
         <button>login</button>
         <p>{count}</p>
         <button onClick={handleClick}>click</button>
    </div>
  )
}
