import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

const initialData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialData);
  const { name, email, password, confirmPassword } = formData;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChangeHandler}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
