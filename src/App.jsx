import "./App.css";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("ITEMS");
    if (localTodos == null) return [];
    return JSON.parse(localTodos);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const addNewItem = (title) => {
    setTodos([...todos, { id: crypto.randomUUID(), title, completed: false }]);
    console.log(todos);
  };

  const toggleCompleted = (id, completed) => {
    const edited = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });
    setTodos(edited);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1 className="title">Your Tasks</h1>
      <TodoList
        tasks={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      ></TodoList>
      <Form submit={addNewItem}></Form>
    </>
  );
}

export default App;
