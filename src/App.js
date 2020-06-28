import React, { useReducer, useRef, useMemo } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import users from "./data/users.json"

const countActive = (users) =>{
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: users
};

const reducer = (state, action) => {
  // console.log(action)
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case "TOGGLE_COLOR":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, active: !user.active };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

function App() {
   // useReducer(
   // reducer is const [state,dispatch] === const reducer = (state, action)
   // initialState is const initialState
   // )
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const nextId = useRef(4);
  const { username, email } = state.inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  };

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    dispatch({
      type: "DELETE_USER",
      id,
    });
  };

  const changeColor = (id) => {
    dispatch({
      type: "TOGGLE_COLOR",
      id,
    });
  };

  const count = useMemo(()=>countActive(users),[users])


  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} changeColor={changeColor} />
  <div>If color is red:{count}</div>
    </div>
  );
}

export default App;
