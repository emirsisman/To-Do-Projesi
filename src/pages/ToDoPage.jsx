import React, { useState, useEffect } from 'react';
import TodoForm from '../components/ToDoForm';
import TodoList from '../components/ToDoList';

const TodoPage = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("staj-todo-listesi");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("staj-todo-listesi", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Görevin tamamlanma durumunu değiştiren fonksiyon
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <div className="card shadow-sm border-0 bg-light p-4">
        <h2 className="text-center mb-4 text-primary fw-bold">React + Vite + BootStrap</h2>
        <h3 className="text-center mb-4 text-secondary">To-Do Listesi</h3>
        
        {/* Giriş alanı için ayrı bir bölüm */}
        <div className="bg-white p-3 border rounded shadow-sm mb-2">
            <TodoForm onAdd={handleAddTodo} />
        </div>
        
        {/* Liste alanı (Küçültülmüş hali TodoList içinde yapıldı) */}
        <TodoList 
            todos={todos} 
            onDelete={handleDeleteTodo} 
            onToggle={handleToggleTodo} 
        />
        
      </div>
    </div>
  );
};

export default TodoPage;