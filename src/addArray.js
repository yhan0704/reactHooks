import React, { Component } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

export default class example extends Component {
  
  state={
    users:[
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
    ],
    username:"",
    email:""
  }

  onCreate=()=>{
    const user={
      id:this.state.users.length + 1,
      username: this.state.username,
      email: this.state.email
    }
    
    this.setState({
      users:[...this.state.users, user]
    })
  }

  onChange=(e)=>{
    const {name, value} = e.target
    this.setState({
      [name]:value
    })
  }

  render() {
    const { username, email } = this.state;
    return (
      <div>
        <CreateUser
          username={username}
          email={email}
          onChange={this.onChange}
          onCreate={this.onCreate}
        />
        <UserList users={this.state.users} />
      </div>
    );
  }
}
