import React, { useState, useRef } from "react";

function MultiInput() {
  const [inputs, newInput] = useState({
    name: "",
    nickName: "",
  });

  const { name, nickName } = inputs; //Destructuring Props
  const nameInput = useRef();

  const onChangeText = (e) => {
    const { name, value } = e.target; //Destructuring Props

    newInput({
      ...inputs, //spread operator
      [name]: value,
    });
  };

  const onReset = () => {
    newInput({
      name: "",
      nickName: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        ref={nameInput}
        onChange={onChangeText}
        value={name}
      />
      <input
        type="text"
        name="nickName"
        onChange={onChangeText}
        value={nickName}
      />
      <button onClick={onReset}>submit</button>
    </div>
  );
}

export default MultiInput;
