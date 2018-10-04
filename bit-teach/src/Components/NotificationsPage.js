import React from "react";
import { connect } from "react-redux";
import Notifications from "./DisplayNotifications";
import NavBar from "./Navigation";

const NotificationPage = ({ notifications }) => {
  return (
    <div className="container p-2 text-center">
      <NavBar />
      <div className="row justify-content-center">
        <ul className="list-group">
          <Notifications notifications={notifications} />
        </ul>
      </div>
    </div>
  );
};

const ConnectNotifications = connect(state => ({
  notifications: state.notifications
}));
export default ConnectNotifications(NotificationPage);
