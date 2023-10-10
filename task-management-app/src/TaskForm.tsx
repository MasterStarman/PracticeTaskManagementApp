// TaskForm.tsx
import React, { useState } from "react";

interface TaskFormProps {
	onTaskAdd: (task: any) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdd }) => {
	const [task, setTask] = useState({
		title: "",
		description: "",
		deadline: "",
		priority: "Low",
	});

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setTask((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onTaskAdd(task);
		// Clear the form after task addition
		setTask({
			title: "",
			description: "",
			deadline: "",
			priority: "Low",
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Title:</label>
			<input
				type="text"
				name="title"
				value={task.title}
				onChange={handleInputChange}
				required
			/>

			<label>Description:</label>
			<textarea
				name="description"
				value={task.description}
				onChange={handleInputChange}
				required
			/>

			<label>Deadline:</label>
			<input
				type="date"
				name="deadline"
				value={task.deadline}
				onChange={handleInputChange}
				required
			/>

			<label>Priority:</label>
			<select
				name="priority"
				value={task.priority}
				onChange={handleInputChange}
			>
				<option value="Low">Low</option>
				<option value="Medium">Medium</option>
				<option value="High">High</option>
			</select>

			<button type="submit">Add Task</button>
		</form>
	);
};

export default TaskForm;
