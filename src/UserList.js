import React from "react";

function User({ user, onRemove, changeColor }) {
  const {id, username, email} = user
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "red" : "black" }}
        onClick={() => changeColor(id)}
      >
        {username}
      </b>{" "}
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>delete</button>
    </div>
  );
}

export default function UserList({ users, onRemove, changeColor }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} changeColor={changeColor} />
      ))}
    </div>
  );
}
