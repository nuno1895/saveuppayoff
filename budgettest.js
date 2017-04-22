// var formData1 = {},
	// formData2 = {},
	// formData3 = {},
	// formData4 = {},
	// formData5 = {},
	// formData6 = {},
	// formData7 = {},
	// formData8 = {},
	// formData9 = {},
	// formData10 = {},
	// formData11 = {},
	// formData12 = {};

var formData = {};
var fieldName;
var fieldValue;
var month;
var payFrequency;
var takeHome;
var groceries;
var restaurants;
var payTotal
var foodTotal



$('#budgetData1Button').on('click', function(evt){
		evt.preventDefault();

	
		month= $('#month').val();

		payFrequency= $('#payFrequency').val();

		takeHome= $('#takeHome').val();

		console.log("your total Pay for " + month + " is: " + (takeHome * payFrequency));

		payTotal = takeHome * payFrequency

		return payTotal

});


$('#budgetData2Button').on('click', function(evt){
		evt.preventDefault();

		
		groceries= $('#groceries').val();

		restaurants= parseInt($('#restaurants').val());	

		foodTotal = parseInt(groceries) + parseInt(restaurants);

		console.log("your total Food Expense for " + month + " is: " + foodTotal);
//have to get total pay to come down
		var totalFoodMinusTotalBudget = (2000- foodTotal)
		var totalPercentageofBudget = 1 - (totalFoodMinusTotalBudget/2000)
		console.log ("Your Percentage of your total Budget is " +totalPercentageofBudget);
		if (totalPercentageofBudget > .15) {
			console.log("Your grade is an f, it is suppose to be 15%");
		} else {

			console.log("Your grade is a A+++")
		}

	


});
