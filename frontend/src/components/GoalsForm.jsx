import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

const GoalsForm = (goal) => {
  const [text, setText] = useState();

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText("");
  };

  const onChangeHandler = (e) => {
    setText((prev) => {
      return e.target.value;
    });
  };

  return (
    <section className="form">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            value={text}
            name="text"
            id="text"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalsForm;
