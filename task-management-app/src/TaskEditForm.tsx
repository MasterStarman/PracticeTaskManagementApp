import React, { useState, useEffect } from "react";

interface TaskEditFormProps {
	task: any;
	onSave: (editedTask: any) => void;
	onClose: () => void;
}

const TaskEditForm: React.FC<TaskEditFormProps> = ({
	task,
	onSave,
	onClose,
}) => {
	const [editedTask, setEditedTask] = useState(task);

	useEffect(() => {
		setEditedTask(task);
	}, [task]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setEditedTask((prevState: any) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSave(editedTask);
		onClose();
	};

	return (
		<div className="modal">
			<form onSubmit={handleSubmit}>
				<label>Title:</label>
				<input
					type="text"
					name="title"
					value={editedTask.title}
					onChange={handleInputChange}
					required
				/>
				{/* add other input fields for description, deadline, and priority*/}

				<button type="submit">Save</button>

				<button
					type="button"
					onClick={onClose}
				>
					Cancel
				</button>
			</form>
		</div>
	);
};
export default TaskEditForm;
