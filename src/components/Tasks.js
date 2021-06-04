import Task from "./Task";

const Tasks = ({ tasksList, onDelete, onToggle }) => {
	return (
		<div>
			{ tasksList.map((task) => (
				<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
			))}
		</div>
	);
}

export default Tasks;