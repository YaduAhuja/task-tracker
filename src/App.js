import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
	const [tasksList, setTasks] = useState([
		{
			id: 1,
			text: "Task 1",
			day: "April 20 at 2:30pm",
			reminder: true
		}
	]);

	const deleteTask = (id) => {
		setTasks(tasksList.filter((task) => task.id !== id));
		// console.log(id);
	}

	const onToggle = (id) => {
		console.log(id)
	}

	return (
		<div className='container'>
			<Header />
			{ tasksList.length > 0 ?
				<Tasks tasksList={tasksList} onDelete={deleteTask} onToggle={onToggle} /> :
				'No Tasks to Show'
			}
		</div>
	);
};

export default App;
