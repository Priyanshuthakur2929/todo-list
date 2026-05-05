import { useState } from "react";
import "./todo-input.css";

function TodoInput({ onAddTask }) {

  // Track what the user types
  const [inputValue, setInputValue] = useState("");

  // Called when Add button is clicked
  const handleSubmit = () => {
    if (!inputValue.trim()) return; // ignore empty input
    onAddTask(inputValue);          // send text up to TodoApp
    setInputValue("");              // clear the field
  };

  // Allow submitting with the Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="input-row">
      <input
        type="text"
        className="task-input"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        maxLength={120}
      />
      <button className="add-btn" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;