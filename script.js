// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//we need to generate a password with...
//a predetermined length between 8 and 128 characters
//ask whether to include lowercase, uppercase, numeric, and/or special characters
//make sure user selects at least one of the above


function generatePassword () {
  var passwordLength = 8;
  var lowercase = true;
  var uppercase = false;
  var numeric = true;
  var specialChar = false;

  var password;

//the case where the user does not input anything
  if (!lowercase && !uppercase && !numeric && !specialChar)
    alert ("Your password must contain at least one characteristic. Please try again.");


//the cases where only one thing is selected
  else if (lowercase && !uppercase && !numeric && !specialChar) {
    alert ("A password with only lowercase letters will be output");


  }

  else if (!lowercase && uppercase && !numeric && !specialChar) {
    alert ("A password with only uppercase letters will be output");
  }

  
  else if (!lowercase && !uppercase && numeric && !specialChar) {
    alert ("A password with only numbers will be output");
  }

  else if (!lowercase && !uppercase && !numeric && specialChar) {
    alert ("A password with only special characters will be output");
  }
  
//the cases where two things are selected
  else if (lowercase && uppercase && !numeric && !specialChar) {
    alert ("A password with uppercase and lowercase will be output");
  }

  
  else if (lowercase && !uppercase && numeric && !specialChar) {
    alert ("A password with lowercase and numeric characters will be output");
  }

  else if (lowercase && !uppercase && !numeric && specialChar) {
    alert ("A password with lowercase and special characters will be output");
  }

  else if (!lowercase && uppercase && numeric && !specialChar) {
    alert ("A password with uppercase and numeric characters will be output");
  }

  else if (!lowercase && uppercase && !numeric && specialChar) {
    alert ("A password with uppercase and special characters will be output");
  }

  else if (!lowercase && !uppercase && numeric && specialChar) {
    alert ("A password with numeric, and special characters will be output");
  }

//cases when three things are selected
  else if (!lowercase && uppercase && numeric && specialChar) {
    alert ("A password with uppercase, numeric, and special characters will be output");
  }

  else if (lowercase && !uppercase && numeric && specialChar) {
    alert ("A password with lowercase, numeric, and special characters will be output");
  }

  else if (lowercase && uppercase && !numeric && specialChar) {
    alert ("A password with uppercase, lowercase, and special characters will be output");
  }
  
  else if (lowercase && uppercase && numeric && !specialChar) {
    alert ("A password with uppercase, lowercase, and numeric characters will be output");
  }

//the case where all are true (and works as a catch-all in case I missed something)
  else {
    alert ("A password with uppercase, lowercase, numeric, and special characters will be output");
  }
}


function generateRandomSpecialChar () {
  randomArray = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

  //checks that array was created successfully
  // for (var i=0; i<randomArray.length; i++) 
  //   console.log (randomArray[i]);

  return randomArray[Math.random() * randomArray.length>>0];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
