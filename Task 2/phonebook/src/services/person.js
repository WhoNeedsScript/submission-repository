import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  console.log(request)
  return request.then(response => response.data)
}

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const update = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson)
    .then(response => response.data)
    .catch(error => {
      return Promise.reject(error.response.data.error)
    })
}

const deletePerson = (id) => {
   axios.delete(`${baseUrl}/${id}`)
  }
  export default { getAll, create, update, deletePerson }