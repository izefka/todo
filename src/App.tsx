import React from "react";
import { useState } from "react";
import { ToDo } from "./ToDo";
import { ToDoForm } from "./ToDoForm";
import { EditView } from "./editView";
import "antd/dist/antd.min.css";
import "./App.css";

export const App: React.FC = () => {
  const [todos, setTodos] = useState<
    { id: string; task: string; complete: string }[]
  >([]);
  const [active, setActive] = useState<boolean>(false);
  const [activeTodo, setActiveTodo] = useState<{ id: string; task: string; complete: string }>({ id: "", task: "", complete: "" });


  const addTask = (userInput: string) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: "ToDo"
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id: string) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const editTask = (id: string) => {
    setActive(true);
    let a=(todos.filter((todo) => todo.id === id));
    if(a.length === 1) setActiveTodo({ id: a[0].id, task: a[0].task, complete: a[0].complete })
  };

  const changeTodo = (id: string, userInput: string) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, task: userInput } : { ...todo }
      ),
    ]);
  };

  const handleToggle = (id: string) => {
    setTodos([
      ...todos.map((todo) =>{
        if (todo.id === id && todo.complete === "ToDo") return { ...todo, complete: "In progress" } ;
        else if (todo.id === id && todo.complete === "In progress") return { ...todo, complete: "Done" } ;
        else return { ...todo };
  }),
    ]);
  };

  return (
    <div className="App">
      <EditView
        active={active}
        setActive={setActive}
        todo={activeTodo}
        changeTodo={changeTodo}
      />
      <h1>TODO LIST</h1>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            toggleTask={handleToggle}
            removeTask={removeTask}
            editTask={editTask}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};
