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

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
