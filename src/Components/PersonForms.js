const Form = ({addPerson, user, number, name, numb}) =>{
	return(
		<form onSubmit = {addPerson}>
		<h2>Add a new user</h2>
		<h4>Name</h4>
		  <input type="text" onChange={user} value ={name}/>
		<h4>Number</h4>
		  <input type="number" onChange={number} value ={numb}/>
		<div>
		<button type="submit">Add a new person</button>
		</div>
		</form>
		)
} 


export default Form