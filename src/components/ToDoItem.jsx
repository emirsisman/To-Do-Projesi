import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center py-2">
      {/* Eğer görev tamamlandıysa üstünü çiziyoruz */}
      <span className={todo.completed ? "text-decoration-line-through text-muted" : ""}>
        {todo.text}
      </span>
      
      <div>
        {/* Tamamla/Geri Al Butonu */}
        <button 
          className={`btn btn-sm me-2 ${todo.completed ? "btn-secondary" : "btn-success"}`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed ? "Geri Al" : "Tamamla"}
        </button>

        {/* Sil Butonu */}
        <button 
          className="btn btn-danger btn-sm" 
          onClick={() => onDelete(todo.id)}
        >
          Sil
        </button>
      </div>
    </li>
  );
};

export default TodoItem;