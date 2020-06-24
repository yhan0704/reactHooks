import React, { useState } from "react";

function InputSample() {
  const [text, newText] = useState("");

  const onChangeText = (e) => {
    newText(e.target.value);
  };

  const onReset=()=>{
    newText("")
  }

  return (
    <div>
        {/* if I dont use value = {text}, it will not reset input  */}
      <input type="text" onChange={onChangeText} value={text} />
        {text}
      <button onClick={onReset}>submit</button>
    </div>
  );
}

export default InputSample;
