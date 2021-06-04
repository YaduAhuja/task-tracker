import { useState } from 'react'
import Header from './components/Header'
import AddForm from './components/AddForm'
import Tasks from './components/Tasks'

const App = () => {
	const [taskData, setTaskData] = useState({
		maxid: 0,
		tasksList: []
	});

	const deleteTask = (id) => {
		setTaskData({
			...taskData,
			tasksList: taskData.tasksList.filter((task) => task.id !== id)
		})
	}

	const addTask = (data) => {
		data.id = taskData.maxid
		setTaskData({
			maxid: taskData.maxid + 1,
			tasksList: [...taskData.tasksList, data]
		})
	}

	const onToggle = (id) => {
		setTaskData({
			...taskData,
			tasksList: taskData.tasksList.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
		})
	}

	return (
		<div className='container'>
			<Header />
			<AddForm addTask={addTask} />
			{ taskData.tasksList.length > 0 ?
				<Tasks tasksList={taskData.tasksList} onDelete={deleteTask} onToggle={onToggle} /> :
				'No Tasks to Show'
			}
		</div>
	);
};

export default App;
