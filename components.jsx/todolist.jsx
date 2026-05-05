import TodoItem from "./todo-item.jsx";
import "./todo-list.css";

function TodoList({ tasks, onToggleComplete, onDeleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;