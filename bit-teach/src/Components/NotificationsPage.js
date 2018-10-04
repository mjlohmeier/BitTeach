import React from "react";
import { connect } from "react-redux";
import Notifications from "./Notifications";

const NotificationPage = ({ notifications }) => {
  return (
    <div className="container p-2 text-center">
      <div className="row justify-content-center">
        <div className="col">
          <ul className="list-group">
            <Notifications notifications={notifications} />
          </ul>
        </div>
      </div>
    </div>
  );
};

const ConnectNotifications = connect(state => ({
  notifications: state.notifications
}));
export default ConnectNotifications(NotificationPage);
