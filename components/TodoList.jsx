/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleCompleted, deleteTodo }) {
  return (
    <div className="list">
      {tasks.length === 0 && "No Tasks Pending"}
      {tasks.map((task) => {
        return (
          <TodoItem
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          ></TodoItem>
        );
      })}
    </div>
  );
}

export default TodoList;
