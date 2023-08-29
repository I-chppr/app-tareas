import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={addTask}>Agregar</button>
      <table>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className={task.completed ? 'completed' : ''}>
              <td>{task.text}</td>
              <td>
                <button onClick={() => toggleComplete(index)}>
                  Completada
                </button>
                <button
                  onClick={() => {
                    const newText = prompt('Editar tarea:', task.text);
                    if (newText !== null) {
                      editTask(index, newText);
                    }
                  }}
                >
                  Editar
                </button>
                <button onClick={() => deleteTask(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
