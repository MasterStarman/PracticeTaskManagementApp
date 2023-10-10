import React from "react";
import Task from "./task";

interface TaskListProps {
	// Define the structure of the 'tasks' prop
	tasks: Array<any>;
	// Define functions for handling task deletion and completion toggle
	onDelete: (id: number) => void;
	onToggle: (id: number) => void;
}

// TaskList component receives task data and event handlers as props
const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
	return (
		<div className="task-List">
			{/* Map through tasks and render Task component for each task */}
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					onDelete={onDelete}
					onToggle={onToggle}
					onEdit={function (id: number, updatedTask: any): void {
						throw new Error("Function not implemented.");
					}}
				/>
			))}
		</div>
	);
};

export default TaskList;
