import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userDetails"));
    // console.log(storedUser)

    if (
      storedUser &&
      storedUser.name == loginForm.name &&
      storedUser.password == loginForm.password
    ) {
      alert("Login Successful!");
      navigate('/home')
    } else {
      alert("Invalid Details!");
      navigate('/signup')
    }

    setLoginForm({
      name: "",
      password: "",
    });

  };

  return (
    <>
      <div className="signup-wrapper">
        <form action="" className="signup" onSubmit={handleSubmit}>
          <h1>Login.</h1>
          <div>
            <label htmlFor="">Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Name"
              onChange={handleChange}
              value={loginForm.name}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              onChange={handleChange}
              value={loginForm.password}
            />
          </div>
          <button>Submit</button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up.</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
