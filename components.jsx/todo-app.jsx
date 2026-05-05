import { useState, useEffect } from "react";
import TodoInput from "./todo-input.jsx";
import TodoList from "./todolist.jsx";
import "./todo-app.css";

function TodoApp() {

  // Load tasks from localStorage when app first loads
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("todo-tasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save tasks to localStorage every time tasks change
  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task to the top of the list
  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  // Toggle the completed status of a task
  const handleToggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Remove a task from the list
  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const totalTasks     = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;

  return (
    <div className="page-wrapper">
      <div className="card">

        {/* ── Header ── */}
        <header className="app-header">
          <h1 className="app-title">My Tasks</h1>
          {totalTasks > 0 && (
            <span className="task-counter">
              {completedTasks}/{totalTasks} done
            </span>
          )}
        </header>

        {/* ── Input Box ── */}
        <TodoInput onAddTask={handleAddTask} />

        {/* ── Progress Bar ── */}
        {totalTasks > 0 && (
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${(completedTasks / totalTasks) * 100}%` }}
            />
          </div>
        )}

        {/* ── Task List ── */}
        <TodoList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
        />

        {/* ── Empty State ── */}
        {totalTasks === 0 && (
          <p className="empty-message">
            ✨ Nothing here yet — add a task to get started!
          </p>
        )}

      </div>
    </div>
  );
}

export default TodoApp;