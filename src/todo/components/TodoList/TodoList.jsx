import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo, AddTodo, Filter } from "..";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      text: "Take out the trash",
      isDone: false,
    },
    {
      id: uuidv4(),
      text: "Get ready for the office",
      isDone: false,
    },
  ]);

  const handleDone = (id) => {
    const idx = todos.findIndex((x) => x.id === id);
    const copyTodo = [...todos];
    copyTodo[idx].isDone = !todos[idx].isDone;
    setTodos(copyTodo);
  };

  const handleAdd = (text) => {
    if (!text) return;
    const copyTodo = [
      ...todos,
      {
        id: uuidv4(),
        text,
        isDone: false,
      },
    ];
    setTodos(copyTodo);
  };

  const filteredTodos = (() => {
    const filterState = {
      completed: true,
      active: false,
    };

    return filter === "all"
      ? structuredClone(todos)
      : todos.filter((x) => x.isDone === filterState[filter]);
  })();

  return (
    <div className={styles.todoList}>
      <div className={styles.listBlock}>
        <div className={styles.top}>
          <Filter filter={filter} onFilter={setFilter} />
        </div>
        {filteredTodos.length ? (
          <ul className={styles.list}>
            {filteredTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} onChange={handleDone} />
            ))}
          </ul>
        ) : (
          <div className={styles.noTodos}>No todos found :(</div>
        )}
        <AddTodo onSubmit={handleAdd} />
      </div>
    </div>
  );
};
