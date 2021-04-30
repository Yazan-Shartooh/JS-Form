function printError(elemId, hintMsg) {
	document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
	var name = document.contactForm.name.value;
	var email = document.contactForm.email.value;
	var mobile = document.contactForm.mobile.value;
	var country = document.contactForm.country.value;
	var gender = document.contactForm.gender.value;
	var hobbies = [];
	var checkbox = document.getElementsByName("hobbies[]");
	for (var i=0 ; i < checkbox.length ; i++) {
		if (checkbox[i].checked)
			hobbies.push(checkbox[i].value);
	}
	var nameError = emailError = countryError = genderError = true;
	
	if (name=="") {
		printError("nameError", "Please Enter Your Name")
	} else {
		var regex = /^[a-zA-Z\s]+$/;
		if (regex.test(name)===false) {
			printError("nameError", "Please Enter A Valide Name");
		} else {
			printError("nameError", "");
			nameError = false;
		}
	}

	if (email=="") {
		printError("emailError", "Please Enter Your Email Address")
	} else {
		var regex = /^\S+@\S+\.\S+$/;
		if (regex.test(name)===false) {
			printError("emailError", "Please Enter A Valide Email Address");
		} else {
			printError("emailError", "");
			emailError = false;
		}
	}

	if (mobile=="") {
		printError("mobileError", "Please Enter Your Mobile Number")
	} else {
		var regex = /^[1-9]\d{9}$/;
		if (regex.test(mobile)===false) {
			printError("mobileError", "Please Enter A Valide 10 Digits Mobile Number");
		} else {
			printError("mobileError", "");
			mobileError = false;
		}
	}

	if (country=="Select") {
		printError("countryError", "Please Select Your Country")
	} else {
		printError("countryError", "");
		countryError = false;
	}
	
	if (gender=="") {
		printError("genderError", "Please Select Your Gender")
	} else {
		printError("genderError", "");
		genderError = false;
	}

	if (nameError||emailError||mobileError||countryError||genderError == true) {
		return false;
	} else {
		var dataPreview = "You've Entered The Following Details : \n" +
						"Full Name : "+ name + "\n" +
						"Email Address : "+ email + "\n" +
						"Mobile Number : "+ mobile + "\n" +
						"Country : " + country + "\n" +
						"Gender : " + gender + "\n";
		if (hobbies.length) {
			dataPreview += "Hobbies : " + hobbies.join(",");
		}
		alert(dataPreview);
	}
}

