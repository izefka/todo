import React from 'react';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface Props {
    todo: {
        id: string,
        task: string,
        complete: string
    };
    toggleTask: (id: string) => void;
    removeTask: (id: string) => void;
    editTask: (id: string) => void;
}
export const ToDo: React.FC<Props>= ({ todo, toggleTask, removeTask, editTask }) =>{
    return (<div key={todo.id} className="item-todo">
    <div
      className="item-text"
    >
      {todo.task.length > 20 ? todo.task.slice(0, 17) + " ..." : todo.task}
    </div>
    <div  className={todo.complete === "Done" ? "item-todos done" : (todo.complete === "In progress" ? "item-todos progress": "item-todos" )} onClick={() => toggleTask(todo.id)}>
      {todo.complete}
    </div>
    <EditOutlined
      className={"item-actions"}
      onClick={() => editTask(todo.id)}
    />
    <DeleteOutlined
      className={"item-actions"}
      onClick={() => removeTask(todo.id)}
    />
  </div>
);
};

/* import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
export function ToDo({ todo, toggleTask, removeTask, editTask }) {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className="item-text"
      >
        {todo.task.length > 20 ? todo.task.slice(0, 17) + " ..." : todo.task}
      </div>
      <div  className={todo.complete === "Done" ? "item-todos done" : (todo.complete === "In progress" ? "item-todos progress": "item-todos" )} onClick={() => toggleTask(todo.id)}>
        {todo.complete}
      </div>
      <EditOutlined
        className={"item-actions"}
        onClick={() => editTask(todo.id)}
      />
      <DeleteOutlined
        className={"item-actions"}
        onClick={() => removeTask(todo.id)}
      />
    </div>
  );
} */