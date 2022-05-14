import React from "react";
import { useState } from "react";

export const ToDoForm: React.FC<{ addTask: (id: string) => void }> = ({
  addTask}
) => {
  const [userInput, setUserInput] = useState<string>("");
  const handleChange = (e: any) => {
    setUserInput(e.currentTarget.value);
  };
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Your next task"
      />
      <button>Add Task</button>
    </form>
  );
};
