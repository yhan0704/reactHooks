import React, { useRef, useState } from "react";
import "./App.css";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [ users, setUsers ] = useState([
    {
      id: 1,
      username: "Young",
      email: "young@gmail.com"
    },
    {
      id: 2,
      username: "test",
      email: "test@gmail.com"
    },
    {
      id: 3,
      username: "Tom",
      email: "tom@gmail.com"
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  return (
    <div className="App">
      <div>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
      </div>
      <UserList users={users} />
    </div>
  );
}

export default App;
