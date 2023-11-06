import { memo } from "react";
import styles from "./Todo.module.css";

const Todo = ({ todo, onChange }) => {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          checked={todo.isDone}
          onChange={() => onChange(todo.id)}
        />
        <span className={styles.checkmark} />
        <span className={styles.text}>{todo.text}</span>
      </label>
    </li>
  );
};

export const TodoMemo = memo(Todo);
