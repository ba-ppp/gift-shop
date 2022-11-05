import axios from 'axios';

export default function callApi (endpoint: any , method = 'GET', data: any){
  return axios({
    method: method,
    url: `http://localhost:8080/${endpoint}`,
    data: data
  }).catch(err=> {
    console.log(err);
  })
}