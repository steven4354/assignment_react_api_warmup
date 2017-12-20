// UserCard.js
import React from "react";
import Button from "./elements/Button"
const UserCard = ({user, onClick}) => {
  const {first_name, last_name, avatar, id} = user;
  
  return (
    <div key={id} className="UserCard card" style={{maxWidth: "128px"}}>
      <img
        className="card-img-top img-fluid"
        src={user.avatar}
        alt="user avatar"
      />
      <div className="card-block">
        <h4>
          {first_name} {last_name}
        </h4>
      </div>
      <div className="card-block">
        <Button text="Delete" onClick={onClick} value={id}/>
      </div>
    </div>
  );
};

export default UserCard;
