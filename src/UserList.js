import React from "react";

function User({ user, onRemove, changeColor }) {
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "red" : "black" }}
        onClick={() => changeColor(user.id)}
      >
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>delete</button>
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
