import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Hi my friend",
      day: "Monday 11 November",
      reminder: true,
    },
    {
      id: 2,
      text: "Hi my friend dldldjjdj",
      day: "Monday 14 November",
      reminder: true,
    },
    {
      id: 3,
      text: "Hi my friend bxbxvxvx",
      day: "Monday 15 November",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onShow={()=>setShowAddForm(!showAddForm)} showAdd={showAddForm} />

      {showAddForm && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
