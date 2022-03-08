import axios from 'axios'
const baseurl = 'http://localhost:3001/api/persons'

const getAll = () => axios.get(baseurl)

const create = nameStore => axios.post(baseurl, nameStore)

const update = (id, nameStore) => axios.put(`${baseurl}/${id}`, nameStore)

const dlt = (memoryId) => axios.delete(`${baseurl}/${memoryId}`)

export default {getAll, create, update, dlt}