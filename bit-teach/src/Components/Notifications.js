import React from "react";
import NavBar from "./Navigation";

const Notifications = ({ notifications }) => {
  return (
    <div>
      <NavBar />
      {<li className="list-group-item">{notifications.newUser}</li>}
    </div>
  );
};

export default Notifications;
