import React from 'react'
import './First.css'

const array1 = ["hi hello " , "namsate sam" , "kya kar rha hai"];
const array2 = ["😄" , "😚" , "😛" , "🥲" ,"🥸" ,"😎"];
let todos = ["goa day1" , "goa day2","goa day3","goa day4" ];

let emoji = Math.floor(Math.random()*array2.length);

let random = Math.floor(Math.random()*10) + 1;
// let magicNum = 7;
// let test = null;
// if(magicNum === random ){ test = <img  src="https://images.unsplash.com/photo-1675685468877-8cda3a02c49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />}
// else{test = "number doesnot match buddy"}

const First = () => {
  return (
    <div>
        <h2>{random}</h2>
        <h3>{array2[emoji]}</h3>
        {/* {test} */}
        {random === 7 ? <img src="https://images.unsplash.com/photo-1675685468877-8cda3a02c49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"/> : "nahi ho paega"}
        <ul>
          {
            todos.map((item,num)=>{
              return <li key={item} >{num+1}: {item}</li>
            })
          }
        </ul>
        
    </div>
  )
}

export default First