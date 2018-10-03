import React from "react";

const Notifications = ({ notifications }) => {
  return (
    <div>
      {
        <li className="list-items">
            {notifications.newUser}
        </li>
      }
    </div>
  );
};

export default Notifications;
