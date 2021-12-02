import TodoTask from "../TodoTask/TodoTask";
import { useState, useEffect } from "react";

const Home = (props) => {
  const { listToShow, error, isLoading, removeTodo, numOfTodo } = props;

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(listToShow);
  }, [listToShow]);

  const removeOneTodo = (id) => {
    removeTodo(id);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  if (isLoading) {
    return <h1>loading...</h1>;
  } else {
    return (
      <div>
        {error && <p>Error: {error} </p>};
        {todos &&
          todos.map((todo) => {
            return (
              <div key={todo.id}>
                <TodoTask
                  title={todo.title}
                  isCompleted={todo.completed}
                  id={todo.id}
                  removeTodo={removeOneTodo}
                  completeTodo={completeTodo}
                />
              </div>
            );
          })}
      </div>
    );
  }
};

export default Home;
