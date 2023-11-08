import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const initialData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialData);
  const { name, email, password, confirmPassword } = formData;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChangeHandler}
            />
          </div>
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
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Please confirm your password"
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

export default Register;
