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

  setLocalUser: function(data) {
  	return axios.post('/setLocalUser', data);
  },

   logIn: function(emailPass){
    debugger;
  
    return axios.post('/login', emailPass)
      .then(function (response){
        debugger;
        return response;
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
   }


};