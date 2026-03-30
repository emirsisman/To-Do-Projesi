import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    if (taskText.trim() !== "") {
      onAdd(taskText);
      setTaskText("");
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Yeni görev ekle..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button className="btn btn-primary" onClick={handleAdd}>
        Ekle
      </button>
    </div>
  );
};

export default TodoForm;