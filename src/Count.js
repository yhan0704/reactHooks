import React, { useState } from "react";

function Count(){
  const [count, countNum] = useState(0)

  const increaseCount=()=>{
      countNum(prevNum => prevNum + 1)
  }

  const decreaseCount=()=>{
      countNum(prevNum => prevNum - 1)
  }

  return (
    <div>
      <div>
        <h1>Welcom to Clock</h1>
      </div>
      <div>
        {count}<hr/>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  );
}

export default Count
