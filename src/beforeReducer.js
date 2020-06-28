import React, { useState, useMemo } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, newInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const countActive = (users) =>{
    return users.filter(user => user.active).length;
  }

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
      active: true,
    },
    {
      id: 2,
      username: "Tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "Tom",
      email: "tom@google.com",
      active: false,
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

  const onRemove = (id) => {
    newUsers(users.filter((user) => user.id !== id));
  };

  const changeColor = (userId) => {
    newUsers(
      users.map((user) => {
        if (user.id === userId) {
          return { ...user, active: !user.active };
        }
        return user;
      })
    );
  };

  let count = useMemo(()=>countActive(users),[users])

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} changeColor={changeColor} />
      <div>If color is red: {count}</div>
    </div>
  );
}

export default App;
