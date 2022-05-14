import { useEffect, useState } from "react";
import React from "react";

interface Props {
    active: boolean;
     setActive: (active: boolean) => void;
     todo: {
        id: string,
        task: string,
        complete: string
    };   
    changeTodo: (id: string, userInput: string) => void;
}
export const EditView= React.memo<Props>(({
    active,
    setActive,
    todo,
    changeTodo,
  }) =>{
  const [userInput, setUserInput] = useState("");

  const handleChange = (e: any) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    changeTodo(todo.id, userInput);
    setActive(false);
  };
  useEffect(() => {
    setUserInput(todo.task);
  }, [todo]);
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <input
            value={userInput}
            type="text"
            onChange={handleChange}
            placeholder="Введите значение"
          />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
});