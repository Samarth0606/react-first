import React, { useState } from 'react'
import "./Person.css"

const Person = (props) => {
    // console.log(props);
    let [name,setName] = useState(props.namee);

    // let name = props.name;
    let handleClick = ()=>{
      // let name ="anonymous"
      setName('anonymous');
      // console.log(namee);
    }
    
    return (
    <div onClick={handleClick} className='boxx'>
      {/* <div onClick={handleClick} >i am a div stay away dont click</div> */}
        <h1>Name: {name}</h1>
        <h2>Age: {props.age} </h2>
        <p>Fav. color: {props.favColor}</p>
        {/* <input placeholder='Enter your input'/> */}
    </div>
  )
}

export default Person;