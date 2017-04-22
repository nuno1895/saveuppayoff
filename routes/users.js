var express = require('express');
var router = express.Router();

//from old file validator

var Validator = require('validator');
var isEmpty = require('lodash/isEmpty');


function validateInput(data) {
  let errors = {};
  
  if(!Validator.isEmail(data.email)){
    errors.email = "Email is invalid";
  }

  if(Validator.isNull(data.email)){
    errors.email = "Email is Required";

  }
  if(Validator.isNull(data.username)){
    errors.username = "A User Name is Required";

  }
  if(Validator.isNull(data.password)){
    errors.password = "Password is Required";

  } 
  if(Validator.isNull(data.passwordConfirmation)){
    errors.passwordConfirmation = "Please Confirm Password";

  }
  if(!Validator.equals(data.password, data.passwordConfirmation)){
    errors.passwordConfirmation = "Passwords Must Match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

});

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});

module.exports = router;
