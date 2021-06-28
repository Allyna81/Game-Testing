import axios from 'axios';

const API_URL = 'https://gametesting1.herokuapp.com/';

const register = (pseudo, email, password) => axios.post(`${API_URL}signup`, {
  pseudo,
  email,
  password,
});

const login = (email, password) => axios
  .post(`${API_URL}login`, {
    email,
    password,
  })
  .then((response) => {
   if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
console.log(response);
   return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
