import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter.js'
import Form from './Components/PersonForms.js'
import Display from './Components/Display.js'
import axios from 'axios'
import noteService from './Services/Notes.js'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber ] = useState('')
  const [ newSearch, setSearch] = useState('')

 

  const info = (e)=>{
    e.preventDefault()
    const nameStore = {
      content: newName,
      number: newNumber,
      important: Math.random() > 0.5
    }

    const comparation = persons.find(ps => ps.content === nameStore.content)

    if (nameStore.number.length <= 1) {
      alert("You have to put a number if you wanna send data")
    } else {
       if (comparation === undefined) {
    noteService
    .create(nameStore)
    .then(res => setPersons(persons.concat(res.data)))   
    setNewName('')
    setNumber('')
    console.log("the name is now in the data")
   } else {
     alert(`${nameStore.content} theres exist, change the name`)
   }
  }
  } 

      useEffect(() =>{
        noteService
        .getAll()
        .then(res =>{
          setPersons(res.data)
        })
      }, [])


  const names = (e)=>{
    setNewName(e.target.value)
  }

  const numbers = (e)=>{
    setNumber(e.target.value)
  }

  const searching = (e)=>{
    setSearch(e.target.value)
    const regex = new RegExp( newSearch, 'i' )
    const filters = () => persons.filter(us => us.content.match(regex))    
    setPersons(filters)
  }

const toggleImportanceOf = id => {
  console.log('importance of ' + id + ' needs to be toggled')
  const url = `http://localhost:3001/notes/${id}`
  const person = persons.find(n => n.id === id)
  const changedNote = { ...person, important: !person.important }

  axios.put(url, changedNote).then(response => {
    setPersons(persons.map(note => note.id !== id ? note : response.data))
  })
}

const dltData = id =>{
  console.log(`this is the id of the object ${id}`)
  

  noteService
  .dlt(id)
  .then(dldata =>{
    setPersons(persons.filter(ps => ps.id !== id))
  })
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filters = {searching}/>
      <Form addPerson = {info} user = {names} number = {numbers}
      name = {newName} numb = {newNumber}/>
      <h2>Numbers</h2>
      {persons.map(pers => <Display 
        key={pers.id} 
        person ={pers}
        toggleImportance={() => toggleImportanceOf(pers.id)}
        dlt ={() => dltData(pers.id)}
        />)}
    </div>
  )
}

export default App
