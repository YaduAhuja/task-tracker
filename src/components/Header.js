const Header = () => {
	return (
		<div className="header">
			<h1>Task Tracker</h1>
			<button className='btn' onClick={ClickEvent} >
				Add
			</button>
		</div>
	);
}


const ClickEvent = () => {
	console.log("Hello")
}


export default Header;