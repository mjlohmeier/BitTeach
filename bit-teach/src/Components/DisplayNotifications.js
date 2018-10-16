import React from "react";

const Notifications = ({ notifications }) => {
  return (
    <div>
      <div>
        {notifications.map(notification => {
          return (
            <div key={notification.id}>
              <li className="list-group-item mr-2">
                {notification.message}
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
