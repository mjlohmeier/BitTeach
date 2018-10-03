import React from "react";

const UserRegisterForm = ({
  submitForm,
  handleChange,
  email,
  user_name,
  user_password
}) => {
  return (
    <div className="card forms">
      <div className="card-body">
        <div className="form-group">
          <label>
            Email <strong style={Styles.wildcard}>*</strong>
          </label>
          <form onSubmit={submitForm} className="form-group">
            <div className="form-group">
              <input
                type="email"
                onChange={e => handleChange(e, "email")}
                required={true}
                value={email}
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group">
            <label>
                User Name <strong style={Styles.wildcard}>*</strong>
              </label>
              <input
                type="text"
                onChange={e => handleChange(e, "user_name")}
                required={true}
                value={user_name}
                placeholder="User Name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>
                Password <strong style={Styles.wildcard}>*</strong>
              </label>
              <div>
                <input
                  type="password"
                  onChange={e => handleChange(e, "user_password")}
                  required={true}
                  value={user_password}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <button className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegisterForm;

const Styles = {
  wildcard: {
    color: "red"
  }
};
