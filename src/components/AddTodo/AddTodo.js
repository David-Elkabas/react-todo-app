import { useForm } from "react-hook-form";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Styles from "./AddTodo.module.css";

const AddTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isValid, setIsValid] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsValid(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={Styles.todo}>
          <label htmlFor="todoTask">new ToDo:</label>
          <input
            placeholder="add a todo"
            {...register("todoTask", { validate: (value) => value.length > 3 })}
          />

          {errors.todoTask && (
            <p className={Styles.error}>
              Your Blog name is less than 3 characters
            </p>
          )}
        </div>

        <input type="submit" className={Styles.btn} />
        {isValid && <Navigate to="/" />}
      </form>
    </div>
  );
};

export default AddTodo;
