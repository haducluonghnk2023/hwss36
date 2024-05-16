import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setCount] =useState<number>(0)
    const [numbers,setNumbers] = useState<number[]>([])
    const [active,setActive] = useState<boolean>(false)
    useEffect(()=>{
        console.log("dang goi vao useEffect");
        
    },[active])
    const handleClick = ()=> {
        setCount(count+1)
        // khi mỗi lần click thì sẽ thêm 1 số bất kì vào mảng numbers
        // let randomNumber = Math.floor(Math.random() * 100);
        // numbers.push(randomNumber);
        // console.log(numbers);
        // // di set lại state 
        // setNumbers([...numbers])
    }
    console.log("component duoc re-render");
    
  return (
    <div>UseEffect
        {/*  
            tất cả các hook bản chất là những function
            khi dùng phải import để dùng 
            useEffect nhận vào 2 cái đối số 
            1. là 1 callback (arrow function)
            2. [] || [deps]
            ==> useEffect có 3 cách dùng
            c1 : chỉ chứa callback là 1 arrow function
            - khi component duoc mount vao dom thì useeffect được gọi
            - mỗi lần component được re-render thì nó cũng được gọi
            c2 : chứa callback và []
            - cũng được gọi sau khi component được mount vào dom
            - khi mỗi lần component re-render thì useeffect sẽ không bị gọi lại
            c3 : chứa callback và [deps : sự phụ thuộc]
            - componentDidMount : được gọi sau khi component được render lần đầu 
            - cũng được gọi sau khi component được mount vào dom
            - khi dependency thay đổi thì useeffect được gọi




          useEffect là phương thức dùng để xử lý các tác vụ như  callAPI để lấy dữ liệu
          -thường dùng để xử lý các side Effect (bên cạnh ảnh hưởng phụ thuộc )
        
        */}
        <p>gia tri count : {count}</p>
        <button onClick={handleClick}>click</button>
    </div>
  )
}
