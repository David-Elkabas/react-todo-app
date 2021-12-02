import { RiCloseCircleLine, RiEditBoxLine } from "react-icons/ri";

import Styles from "./TodoTask.module.css";

const TodoTask = (props) => {
  const { title, isCompleted, id, removeTodo, completeTodo } = props;

  return (
    <div
      className={
        isCompleted ? `${Styles.complete} ${Styles.todo_row}` : Styles.todo_row
      }
    >
      <div onClick={() => completeTodo(id)}>{title}</div>
      <div className={Styles.icons}>
        <RiCloseCircleLine
          onClick={() => removeTodo(id)}
          className={Styles.delete_icon}
        />
        <RiEditBoxLine
        // onClick={() => setEdit({ id: todo.id, value: title })}
        />
      </div>
    </div>
  );
};

export default TodoTask;
