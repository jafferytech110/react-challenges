import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { useRef } from "react";

const Signup = ({ submitForm }) => {

  const fullNameInput = useRef()
  const emailInput = useRef()
  const passwordInput = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      fullname: fullNameInput.current.value,
      email: emailInput.current.value,
      password: emailInput.current.value,
    }
    console.log(data)
  }

  return (
    <>
      <h1>Sign up</h1>
      <form className="form" onSubmit={handleSubmit}>
        {/* account */}
        <div className="form-account">
          <h2>Account</h2>
          <div className="form-account-items">
            <div>
              <label htmlFor="fullName">
                <FaUserAlt />
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                ref={fullNameInput}
              />
            </div>
            <div>
              <label htmlFor="email">
                <MdEmail />
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                ref={emailInput}
              />
            </div>
            <div>
              <label htmlFor="password">
                <RiLockPasswordFill />
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={passwordInput}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Signup;
