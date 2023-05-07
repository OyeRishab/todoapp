import { useState } from "react";

/* eslint-disable react/prop-types */
function Form(props) {
  // const [todos, setTodos] = useState([])
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(newTask);

    setNewTask("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item" id="label">
            Add New Task
          </label>
          <input
            required
            type="text"
            id="item"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <button id="submit-btn">Submit</button>
      </form>
    </>
  );
}

export default Form;
