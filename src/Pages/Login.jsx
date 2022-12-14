import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()

  const changeHandler = (e) => {
    //functions that handles the change to the controlled components and saves the values to state
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
    //A function to verify the details of the login information
    //if the password or email (that exist in "mockDB") don't match the input values, it throws an error
    //if the email was in some wrong format it throws an error 
    //then if there is no errors it allows the user to submit the information
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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

    if (!regex.test(loginData.email)) {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          email: "This is not a valid email format!",
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
    // I wanted to do something wih the "remember me" checkbox, so I decided to mimick what I think it would work
    //if the user selected the checkbox, the login information will be saved in the local storage
    //so if they decide to go to the login page again, and their information is already in localStorage they simply get redirected
    //I didn't implement this feature fully because I wasn't sure it was wanted. But the foundation for it is still there
    if (loginData.shouldRemember) {
      localStorage.setItem("savedLogins", JSON.stringify(loginData));
    }
    if (!loginData.shouldRemember) {
      localStorage.removeItem("savedLogins");
    }
  }, [shouldSubmit]);

  const redirect = () => {
    // a function to redirect the user if they inputted the correct type of information/succeeded in logging in
    setTimeout(()=>navigate("/"), 1000)
    
    return <div style={{width: "250px", margin: "0 auto", fontSize:"1.5rem", textAlign: "center"}}>Thank you, you'll be redirected shortly</div>
  }

  return (
    <>
      {shouldSubmit ? (
        redirect()
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
