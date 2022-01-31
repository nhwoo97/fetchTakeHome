import React from "react";
import "./registration.css";

const Registration = (props) => {
  const { formValue, onChange, onSubmit } = props;
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <div class="card shadow">
          <img
            src="https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title mb-3">Register a User</h3>
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Full Name:
                </label>
                <input
                  name="name"
                  className="form-control"
                  type="text"
                  id="name"
                  value={formValue.name}
                  onChange={onChange}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email:
                </label>
                <input
                  name="email"
                  className="form-control"
                  type="email"
                  id="email"
                  value={formValue.email}
                  onChange={onChange}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password:
                </label>
                <input
                  name="password"
                  className="form-control"
                  type="password"
                  id="password"
                  value={formValue.password}
                  onChange={onChange}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="occupation">
                  Please choose the occupation
                </label>
                <select
                  className="form-select"
                  id="occupation"
                  name="occupation"
                  value={formValue.occupation}
                  onChange={onChange}
                  required
                >
                  <option>---Please Choose An Option---</option>
                  {props.retrieve.occupations.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="state">
                  Please choose the state
                </label>
                <select
                  className="form-select"
                  id="state"
                  name="state"
                  value={formValue.state}
                  onChange={onChange}
                  required
                >
                  <option>---Please Choose An Option---</option>
                  {props.retrieve.states.map((item) => (
                    <option key={item.abbreviation} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={onSubmit}
                disabled={
                  !formValue.name ||
                  !formValue.email ||
                  !formValue.password ||
                  !formValue.occupation ||
                  !formValue.state
                    ? true
                    : false
                }
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
