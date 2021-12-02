import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetchHook } from "./hooks/useFetchHook";
import Home from "./components/Home/Home";
import AddTodo from "./components/AddTodo/AddTodo";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  const [listToShow, setListToShow] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [result, error, isLoading] = useFetchHook(url);

  useEffect(() => {
    if (result !== null) {
      setListToShow(result.slice(0, 4));
    }
  }, [result]);

  const removeTodo = (id) => {
    const removedArr = [...listToShow].filter((todo) => todo.id !== id);
    setListToShow(removedArr);
  };
  const addNewTodo = (newTodo) => {
    let newList = [newTodo, ...listToShow];
    setListToShow(newList);
  };

  return (
    <div className="App">
      <h1>ToDo-App</h1>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              listToShow={listToShow}
              error={error}
              isLoading={isLoading}
              removeTodo={removeTodo}
            />
          }
        />
        <Route path="addTodo" element={<AddTodo addNewTodo={addNewTodo} />} />
      </Routes>
    </div>
  );
}

export default App;
