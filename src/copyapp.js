import React, { useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, newInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    newInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, newUsers] = useState([
    {
      id: 1,
      username: "Young",
      email: "Young@gmail.com",
    },
    {
      id: 2,
      username: "Tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "Tom",
      email: "tom@google.com",
    },
  ]);

  const onCreate = () => {
    const user = {
      id: users.length + 1,
      username,
      email,
    };

    newUsers([...users, user]);

    newInputs({
      username: "",
      email: "",
    });
  };

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </div>
  );
}

export default App;
