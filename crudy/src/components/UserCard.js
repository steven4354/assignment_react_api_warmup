// UserCard.js
import React from 'react'

const UserList =({users, isFetching}) => {
  const userList = users.map((user) =>
    <UserCard user={user} key={user.id} />
  )

  return (
    <div className="container">
      <h1>User List</h1>
      <div className="card-group">
        {isFetching ? <p>Loading...</p> : userList}
      </div>
    </div>
  )
}

export default UserCard
