const Display = ({person, toggleImportance, dlt})=>{
	 const label = person.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {person.name} {person.number} 
      <button onClick={toggleImportance}>{label}</button>
      <button onClick={dlt}>Delete</button>
    </li>
  )
} 

export default Display