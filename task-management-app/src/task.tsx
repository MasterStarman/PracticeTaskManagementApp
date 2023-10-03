import React from "react";

interface TaskProps {
	//Define the structure of the 'task' prop
	task: {
		id: number;
		title: string;
		description: string;
		deadline: string;
		priority: string;
		completed: boolean;
	};

	//Define functions for handling task deletion and completion toggle
	onDelete: (id: number) => void;
	onToggle: (id: number) => void;
}

//Task component receives task data and event handlers as props
const Task: React.FC<TaskProps> = ({ task, onDelete, onToggle }) => {
	return (
		<div className="task">
			{/* Display Task Details */}
			<h3>{task.title}</h3>
			<p>{task.description}</p>
			<p>Deadline: {task.deadline}</p>
			<p>Priority: {task.priority}</p>
			{/* Checkbox for task Completion status*/}
			<input
				type="checkbox"
				checked={task.completed}
				onChange={() => onToggle(task.id)}
			/>
			{/* Button to delete the task*/}
			<button onClick={() => onDelete(task.id)}>Delete</button>
		</div>
	);
};

export default Task;
