import axios from 'axios';

export default {
  getData: function() {
    return axios('/budget');
  },
  postForm: function(data) {
  	return axios.post('/budget', data);
  }
};