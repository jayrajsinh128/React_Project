import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import './Signup.css'

function Signup() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email == "" && state.password == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill The Above details!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Congratsss...",
        text: "SignUp Succesfully...",
      });

      fetch(`https://mock-server-app2-dll0.onrender.com/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then((res) => res.json())
        .then((Res) => console.log(Res))
        .catch((err) => console.log(err));
    }
    setState({
      email: "",
      password: "",
    });

  };

  return (
    <div>
      <section className="container">
        <header>Registration Form</header>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-box">
            <label>User Name</label>
            <input type="text" placeholder="Enter user name" />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="text"
              name="email"
              value={state.email}
              placeholder="Enter email address"
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input type="number" placeholder="Enter phone number" />
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input type="date" placeholder="Enter birth date" />
            </div>
          </div>

          <div className="input-box address">
            <label>Address</label>
            <input type="text" placeholder="Enter street address" />
          </div>
          <br />
          <label className="lg">
            <Link className="link" to={"/login"}>
              Already have an account ? Login
            </Link>
          </label>
          <input value="Submit" type="submit"></input>
        </form>
      </section>
    </div>
  );
}

export default Signup;
