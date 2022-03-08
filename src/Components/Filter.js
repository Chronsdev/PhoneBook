const Filter = ({filters}) =>{
	return(
	<>
	<h4>Text to fillter the right text</h4>
	<input type = "text" onChange = {filters}/>
	</>
	)
}

export default Filter