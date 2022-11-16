import { useState } from "react";
import { accounts } from "../utils/mockDB";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    pwd: "",
    shouldRemember: false,
  });
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    pwd: "",
  });


  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    verifyCredentials();
    console.log("clicked");
  };

  const verifyCredentials = () => {
    // email verification
    // if (
    //   loginData.email != accounts.admins[0].email ||
    //   loginData.email != accounts.admins[0].userName
    // ) {
    //   setLoginErrors((prevLoginErrors) => {
    //     return {
    //       ...prevLoginErrors,
    //       email: "Email/Username is not correct",
    //     };
    //   });
    // } 
    

    //Password verification
    if (loginData.pwd !== accounts.admins[0].pwd) {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          pwd: "Password is not correct",
        };
      });
    }
    if (loginData.pwd === accounts.admins[0].pwd) {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          pwd: "",
        };
      });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={submitHandler}>
        <div className="login--email">
          <label htmlFor="email">Email/Username</label>
          {loginErrors.email !== "" && (
            <label htmlFor="email" className="error">
              {loginErrors.email}
            </label>
          )}
          <input
            id="email"
            type="email"
            name="email"
            placeholder="user@gmail.com"
            value={loginData.email}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="login--pwd">
          <label htmlFor="pwd">Password</label>
          {loginErrors.pwd !== "" && (
            <label htmlFor="pwd" className="error">
              {loginErrors.pwd}
            </label>
          )}
          <input
            id="pwd"
            type="password"
            name="pwd"
            placeholder="Password"
            value={loginData.pwd}
            onChange={changeHandler}
            required
            minLength={8}
          />
        </div>

        <div className="login--help">
          <div className="login--help__remember-me">
            <input
              id="remember-me"
              type="checkbox"
              name="shouldRemember"
              onChange={changeHandler}
              checked={loginData.shouldRemember}
            />
            <label htmlFor="remember-me">Remember Me</label>
          </div>

          <div className="login--help__forgot-pwd">
            <a href="#" className="login--help__forgot-pwd-link">
              Forgot your password?
            </a>
          </div>
        </div>

        <button>Login</button>

        <div className="login--no-account">
          <span>You don't have an account?</span>
          <span>
            <a href="#">Create Account</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
