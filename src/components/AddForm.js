import { useState } from 'react'

const AddForm = ({ id, addTask }) => {
	const [text, setText] = useState('')
	const [day, setDay] = useState('')
	const [reminder, setReminder] = useState(false)

	const submitChecker = (e) => {
		e.preventDefault()
		if (!text) {
			alert('add Task Name')
			return
		}

		if (!day) {
			alert('Add Day & Time')
			return
		}

		addTask({ id: id, text, day, reminder })

		setText('')
		setDay('')
		setReminder(false)
	}

	return (
		<form className='add-form' onSubmit={submitChecker}>
			<div className='form-control'>
				<label>Task</label>
				<input type='text' placeholder='Task Name' value={text} onChange={(e) => setText(e.target.value)} />
			</div>
			<div className='form-control'>
				<label>Day & Time</label>
				<input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
			</div>
			<div className='form-control form-control-check'>
				<label>Task</label>
				<input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.target.checked)} />
			</div>

			<input type='submit' className='btn btn-block'
				value='Save Task' />
		</form>
	)
}


export default AddForm