function askQuestions(){
	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	$('h2').text('Hello ' + fullName); 
	//this puts the name in the h2 field

	if (firstName.toLowerCase() === "General" && lastName.toLowerCase() != "Assembly"){
		console.log("Greetings, General")
	}//if user's first name is General and their last name isn't Assembly, it will gree them.

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'yellow' ||
		faveColour == 'blue')
	{$('h2').css('background-color', faveColour);
	}

	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge);

	if (userAge >= 18) {
		//Do something
		console.log('User is an adult!');
	} else if (userAge >= 13) {
		console.log('User is not an adult')
	} else {
		console.log('Get outta here, Kid!')
	}
}
$(function() {

	$('img').on('click', askQuestions);
})


//this is how you comment in JS//
/*or you can do it like before*/
//but this one is better, because you don't have to close the comment

$(function() {

	//get all the sections
	var sections = $('h3').next();


	//hide all the sections
	sections.hide();

		// when the user clicks an h3
		//here we're just telling the JS to find all h3's and save for later
		$('h3').on('click',function(){

			var thisSection = $(this).next();

			sections.not(thisSection).slideUp(500);

			//Toggle the next element
			// thisSection.slideToggle(500);

			//hide the next element
			//now we're telling it to take action on it when clicked
			$(this).next().slideToggle(1000);

	});


});