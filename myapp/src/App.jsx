import { useState } from 'react';


fucntion Dante(){
  const[count,setCount]useState(0);
}
  return(
    <div>
      <h1>This is my count{count}</h1>
      <button onClick={() => setCount(count +1)}>add</button>
      <button onClick={() => setCount(count -1)}>decrease</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )


}








function Counter(){
  const [count,setCount]=useState(0);
 
  return(

    <div>
      <h1>This is my count:{count}</h1>
      <button onClick={() => setCount(count +1)}>increment</button>
      <button onClick={() => setCount(count -1)}>decrement</button>
      <button onClick={() => setCount (0) }>reset</button>
    </div>
      )
  }
  

 export default Counter 
 
