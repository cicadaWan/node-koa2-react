import axios from 'axios';

export function getList(data) {
  // todo: 初始调取全部数据，不匹配；
  if (data === '') {
    data = '99999'
  }
  return axios.get(`http://localhost:3001/user/profile/${data}`,data)
}
export function deleteList(data) {
  return axios.delete(`http://localhost:3001/user/profile/${data}`,data)
}
export function addList(data) {
 
  return axios.put(`http://localhost:3001/user/profile/${data}`,data)
}
export function updateList(data) {
  return axios.post(`http://localhost:3001/user/profile/`,data)
}
export function register(data) {
  return axios.put('http://localhost:3001/user/register', data)
}
export function login(data) {
  return axios.get(`http://localhost:3001/user/register?name=${data.name}&pass=${data.password}`, data)
}
