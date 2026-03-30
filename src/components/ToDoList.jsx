import React from 'react';
import TodoItem from './ToDoItem';

const TodoList = ({ todos, onDelete, onToggle }) => {
  if (todos.length === 0) {
    return <div className="alert alert-secondary text-center mt-3">Henüz görev eklenmedi.</div>;
  }

  return (
    <div className="mt-4 p-3 border rounded bg-white shadow-sm w-75 mx-auto">
      <h6 className="text-muted mb-3">Görev Listesi</h6>
      <ul className="list-group list-group-flush">
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDelete={onDelete} 
            onToggle={onToggle} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;