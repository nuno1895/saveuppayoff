import axios from 'axios';

export default {
  getData: function() {
    return axios('/budget');
  },
  postForm: function(data) {
  	return axios.post('/formSubmit', data);
  },
  signUp: function(newUser){
  	return axios.post('/create', newUser);
   },
   logIn: function(email){
    return axios.get('/login', {
        params: {
            email
        }
    })
    .then(function (response){
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
   }

};