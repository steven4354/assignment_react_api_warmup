import React, {Component} from "react";
import UserCard from "./UserCard";

// Convert to a functional component and use props
// instead of state for users and isFetching
const UserList = ({users, isFetching, onClick}) => {
  const userList = users.map(user => (
    <UserCard user={user} key={user.id} onClick={onClick} />
  ));

  return (
    <div className="container">
      <h1>User List</h1>
      <div className="card-group">
        {isFetching ? <p>Loading...</p> : userList}
      </div>
    </div>
  );
};

export default UserList;
