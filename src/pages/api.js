// api.js

import axios from 'axios';

export const fetchEmployeeData = () => {
  return axios.get('http://localhost:5000/employee')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
