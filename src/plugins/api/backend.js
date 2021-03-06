import axios from 'axios'

export default class API {
  constructor () {
    this.api = axios.create({
      baseURL: 'http://localhost:8084/com.ach_manager/api'
    })
  }

  getSchedule (docId, endDate) {
    return this.api.get(`${docId}/${endDate}`)
  }

  getAllDoctors () {
    return this.api.get(`doctor/all`).then(result => result.data)
  }

  getDoctorSchedule (id, startTime, endTime) {
    return this.api.get(`schedule/bounded?id=${id}&start=${startTime}&end=${endTime}`).then(result => result.data)
  }

  getAllUsers () {
    return this.api.get(`editUser/getAllUsers`).then(result => result.data)
  }

  removeUser (id) {
    return this.api.get(`editUser/removeUser?id=${id}`).then(result => result.data)
  }

  loginUser (username, password) {
    return this.api.get(`loginUser?username=${username}&password=${password}`).then(result => result.data)
  }

  addAppointment (title, description, time, duration, patientId, doctorId) {
    return this.api.get(`editSchedule/add?title=${title}&description=${description}&time=${time}&duration=${duration}&patientID=${patientId}&doctorID=${doctorId}`).then(result => result.data)
  }

  cancelAppointment (patientId, doctorId, time) {
    return this.api.get(`editSchedule/drop?time=${time}&patientID=${patientId}&doctorID=${doctorId}`).then(result => result.data)
  }

  addDoctor (username, password, phone, name, departmentId, isSurgeon) {
    return this.api.get(`editUser/addDoctor?username=${username}&password=${password}&phone=${phone}&name=${name}&departmentID=${departmentId}&isSurgeon=${isSurgeon}`).then(result => result.data)
  }

  addReceptionist (username, password, phone, name) {
    return this.api.get(`editUser/addReceptionist?username=${username}&password=${password}&phone=${phone}&name=${name}`).then(result => result.data)
  }
}
