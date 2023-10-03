// App.tsx
import React, { useState } from "react";
import "./App.css"; // Import your CSS file for styling
import TaskList from "./tasklist";

const App: React.FC = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: "Sample Task 1",
			description: "Description of task 1",
			deadline: "2023-12-31",
			priority: "High",
			completed: false,
		},
		// Add more sample tasks as needed
	]);

	const deleteTask = (id: number) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleTask = (id: number) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	return (
		<div className="App">
			<h1>Task Management App</h1>
			<TaskList
				tasks={tasks}
				onDelete={deleteTask}
				onToggle={toggleTask}
			/>
		</div>
	);
};

export default App;
