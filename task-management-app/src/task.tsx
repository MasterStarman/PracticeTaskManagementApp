import React, { useState } from "react";
import TaskEditForm from "./TaskEditForm";

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
	onEdit: (id: number, updatedTask: any) => void;
}

//Task component receives task data and event handlers as props
const Task: React.FC<TaskProps> = ({ task, onDelete, onToggle, onEdit }) => {
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveEdit = (editedTask: any) => {
		onEdit(task.id, editedTask);
		setIsEditing(false);
	};
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
			<button onClick={handleEditClick}>Edit</button>
			{/* Button to delete the task*/}
			<button onClick={() => onDelete(task.id)}>Delete</button>

			{isEditing && (
				<TaskEditForm
					task={task}
					onSave={handleSaveEdit}
					onClose={() => setIsEditing(false)}
				/>
			)}
		</div>
	);
};

export default Task;
