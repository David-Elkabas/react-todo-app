import Styles from "./EditTodo.module.css";

const EditTodo = (props) => {
  const { handleSubmit, value, handleChange, inputRef } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder={value}
        onChange={handleChange}
        name="text"
        ref={inputRef}
        className={Styles.editInput}
      />
      <button onClick={handleSubmit} className={Styles.buttonInput}>
        Update
      </button>
    </form>
  );
};

export default EditTodo;
