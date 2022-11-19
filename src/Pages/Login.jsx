import { useEffect, useState } from "react";
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
  const [shouldSubmit, setShouldSubmit] = useState(false);

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
  };

  const verifyCredentials = () => {
    // email verification
    if (
      loginData.email !== accounts.admins[0].email
      // loginData.email !== accounts.admins[0].userName
    ) {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          email: "Email is not correct",
        };
      });
    }
    if (loginData.email === accounts.admins[0].email) {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          email: "",
        };
      });
    }

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

    if (
      loginData.pwd === accounts.admins[0].pwd &&
      loginData.email === accounts.admins[0].email
    ) {
      setShouldSubmit(true);
    }
  };

  useEffect(() => {
    if (loginData.shouldRemember) {
      localStorage.setItem("savedLogins", JSON.stringify(loginData));
    }
    if (!loginData.shouldRemember) {
      localStorage.removeItem("savedLogins");
    }
  }, [shouldSubmit]);

  return (
    <>
      {shouldSubmit ? (
        <div>Thank you, you'll be redirected shortly</div>
      ) : (
        <div className="login-container">
          <h1 className="login-title regular-text">Login As User</h1>
          <div className="login-form-container">
            <form onSubmit={submitHandler} className="login-form">
              <div className="login--email">
                <label htmlFor="email" className="login--email--label">
                  Email/Username
                </label>
                {loginErrors.email !== "" && (
                  <label htmlFor="email" className="login-error">
                    {loginErrors.email}
                  </label>
                )}
                <input
                  id="email"
                  type="text"
                  name="email"
                  className="login-form-email-field"
                  placeholder="user@gmail.com"
                  value={loginData.email}
                  onChange={changeHandler}
                  required
                />
              </div>

              <div className="login--pwd">
                <label htmlFor="pwd" className="login--pwd--label">
                  Password
                </label>
                {loginErrors.pwd !== "" && (
                  <label htmlFor="pwd" className="login-error">
                    {loginErrors.pwd}
                  </label>
                )}
                <input
                  id="pwd"
                  type="password"
                  name="pwd"
                  className="login-form-pwd-field"
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
                  <label htmlFor="remember-me" className="remember-me-text">Remember Me</label>
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
                  <a href="#" className="login--no-account-link">Create Account</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
