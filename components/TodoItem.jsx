/* eslint-disable react/prop-types */
function TodoItem({ id, title, completed, toggleCompleted, deleteTodo }) {
  return (
    <div className="list-item">
      <div>
        <input
          id={id}
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleCompleted(id, e.target.checked)}
        />
        <label htmlFor={id}>{title}</label>
      </div>
      <button onClick={() => deleteTodo(id)} className="btn btn-delete">
        <i id="delete-btn" className="fa-solid fa-x"></i>
      </button>
    </div>
  );
}

export default TodoItem;
