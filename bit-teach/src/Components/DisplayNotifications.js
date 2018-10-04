import React from "react";

const Notifications = ({ notifications }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {notifications.map(notification => {
          return (
            <div key={notification.id}>
              <li className="list-group-item">{notification.message}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
