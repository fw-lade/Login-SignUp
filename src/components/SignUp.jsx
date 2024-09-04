import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData, 
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // console.log(formData)
        localStorage.setItem("userDetails", JSON.stringify(formData));

        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
        });
        alert("User Registered!")

    }






  return (
    <>
      <div className="signup-wrapper" onSubmit={handleSubmit}>
        <form action="" className="signup">
          <h1>Sign Up.</h1>
          <div>
            <label htmlFor="">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              required
              onChange={handleChange}
            />
          </div>
          <button>Submit</button>
          <p>
            Already created an account? <Link to="/">Log in.</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
