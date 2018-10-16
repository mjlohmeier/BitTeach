import React from "react";
import { connect } from "react-redux";
import Notifications from "./DisplayNotifications";
import NavBar from "./Navigation";

const NotificationPage = ({ notifications }) => {
  return (
    <div>
      <NavBar />
      <div className="container p-2 text-center">
        <div className="row justify-content-center">
          <div className=" xs-12 md-6">
            <div className="card-group">
              <div className="card-body">
                <ul className="list-group">
                  <Notifications notifications={notifications} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConnectNotifications = connect(state => ({
  notifications: state.notifications
}));
export default ConnectNotifications(NotificationPage);
