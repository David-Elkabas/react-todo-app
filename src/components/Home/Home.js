import TodoTask from "../TodoTask/TodoTask";
import { useState, useEffect, useRef } from "react";

const Home = (props) => {
  const { listToShow, error, isLoading, removeTodo } = props;
  const [edit, setEdit] = useState({
    id: null,
    value: null,
  });
  const [openEdit, setOpenEdit] = useState(false);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState();
  const inputRef = useRef(null);

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
  const editTodo = (todo) => {
    setOpenEdit(true);
    setEdit({
      id: todo.id,
      value: todo.title,
    });
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log("here");
    e.preventDefault();
    let updatedTodos = todos.map((todo) => {
      if (todo.id === edit.id) {
        todo.title = input;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEdit({
      id: null,
      value: null,
    });
    setOpenEdit(false);
  };

  if (isLoading) {
    return <h1>loading...</h1>;
  } else {
    return (
      <div>
        <div>
          {openEdit ? (
            <form onSubmit={handleSubmit} className="todo-form">
              <input
                placeholder={edit.value}
                onChange={handleChange}
                name="text"
                ref={inputRef}
                className="todo-input edit"
              />
              <button onClick={handleSubmit} className="todo-button edit">
                Update
              </button>
            </form>
          ) : (
            <></>
          )}
        </div>
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
                    editTodo={editTodo}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
};

export default Home;
