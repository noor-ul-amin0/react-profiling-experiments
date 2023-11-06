import { useState } from "react";
import styles from "./AddTodo.module.css";

export const AddTodo = ({ onSubmit }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.add}>
        <input
          className={styles.input}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Type"
        />
        <button type="submit" className={styles.button} onClick={handleSubmit}>
          Add
        </button>
      </div>
    </form>
  );
};
