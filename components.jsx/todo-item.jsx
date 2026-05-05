
import "./todo-item.css";

function TodoItem({ task, onToggleComplete, onDeleteTask }) {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>

      {/* ── Check circle (click to toggle) ── */}
      <button
        className="check-circle"
        onClick={() => onToggleComplete(task.id)}
        title={task.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {task.completed && (
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 8.5L6.5 12L13 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* ── Task text ── */}
      <span className="task-text">{task.text}</span>

      {/* ── Action buttons ── */}
      <div className="item-actions">

        {/* Complete / Undo button */}
        <button
          className={`btn-complete ${task.completed ? "undo" : ""}`}
          onClick={() => onToggleComplete(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        {/* Delete button */}
        <button
          className="btn-delete"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>

      </div>
    </li>
  );
}

export default TodoItem;