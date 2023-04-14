import React from 'react'
import First from './Components/First';
import BadaPerson from './Components/Person'


const App = () => {
  return (
    <article>
      <First/>
      <BadaPerson namee="samarth" age="22" favColor="black" />
      <BadaPerson namee="sam" age="21" favColor="blue" />
      <BadaPerson namee="sammy" age="20" favColor="green" />
    </article>
  )
}

export default App;