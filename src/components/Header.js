const Header = ({ toggleAddForm, showAddForm }) => {
	return (
		<div className="header">
			<h1>Task Tracker</h1>
			<button className='btn'
				onClick={toggleAddForm}
				style={{ backgroundColor: showAddForm ? 'red' : 'green' }} >
				{showAddForm ? 'Close' : 'Add'}
			</button>
		</div>
	);
}

export default Header;