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
  var passwordLength = document.querySelector("#passwordLength").value;

  if (passwordLength<8 || passwordLength>128) {
    alert ("Your password legth must be between 8 and 128 characters. Please try again.");
    return;
  }

  var lowercase = document.querySelector("#lowerCase").checked;
  var uppercase = document.querySelector("#upperCase").checked;
  var numeric = document.querySelector("#numberChar").checked;
  var specialChar = document.querySelector("#specialChar").checked;

  var password = [];
  var allChars = [];

//the case where the user does not input anything
  if (!lowercase && !uppercase && !numeric && !specialChar)
    alert ("Your password must contain at least one characteristic. Please try again.");


//the cases where only one thing is selected
  else {
    if (lowercase && !uppercase && !numeric && !specialChar) {
      alert ("A password with only lowercase letters will be output");
      allChars = lowerArr();
    }

    else if (!lowercase && uppercase && !numeric && !specialChar) {
      alert ("A password with only uppercase letters will be output");
      allChars = upperArr();
    }

  
    else if (!lowercase && !uppercase && numeric && !specialChar) {
      alert ("A password with only numbers will be output");
      allChars = numberArr();
    }

    else if (!lowercase && !uppercase && !numeric && specialChar) {
      alert ("A password with only special characters will be output");
      allChars = specialCharArr();
    }
  
  //the cases where two things are selected
    else if (lowercase && uppercase && !numeric && !specialChar) {
      alert ("A password with uppercase and lowercase will be output");
      allChars = lowerArr().concat(upperArr());
    }

  
    else if (lowercase && !uppercase && numeric && !specialChar) {
      alert ("A password with lowercase and numeric characters will be output");
      allChars = lowerArr().concat(numberArr());
    }

    else if (lowercase && !uppercase && !numeric && specialChar) {
      alert ("A password with lowercase and special characters will be output");
      allChars = lowerArr().concat(specialCharArr());
    }

    else if (!lowercase && uppercase && numeric && !specialChar) {
      alert ("A password with uppercase and numeric characters will be output");
      allChars = upperArr().concat(numberArr());
    }

    else if (!lowercase && uppercase && !numeric && specialChar) {
      alert ("A password with uppercase and special characters will be output");
      allChars = upperArr().concat(specialCharArr());
      }

    else if (!lowercase && !uppercase && numeric && specialChar) {
      alert ("A password with numeric, and special characters will be output");
      allChars = numberArr().concat(specialCharArr());
    }

  //cases when three things are selected
    else if (!lowercase && uppercase && numeric && specialChar) {
      alert ("A password with uppercase, numeric, and special characters will be output");
      allChars = upperArr().concat(numberArr(),specialCharArr());
    }

    else if (lowercase && !uppercase && numeric && specialChar) {
      alert ("A password with lowercase, numeric, and special characters will be output");
      allChars = lowerArr().concat(numberArr(),specialCharArr());
    }

    else if (lowercase && uppercase && !numeric && specialChar) {
      alert ("A password with uppercase, lowercase, and special characters will be output");
      allChars = lowerArr().concat(upperArr(),specialCharArr());
    }
  
    else if (lowercase && uppercase && numeric && !specialChar) {
      alert ("A password with uppercase, lowercase, and numeric characters will be output");
      allChars = lowerArr().concat(upperArr(),numberArr());
    }

  //the case where all are true (and works as a catch-all in case I missed something)
    else {
      alert ("A password with uppercase, lowercase, numeric, and special characters will be output");
      allChars = lowerArr().concat(upperArr(),numberArr(),specialCharArr());
    }

  password = createRandomArray(passwordLength, allChars);
  
  }

  //these four cases check that, in all cases, if soemthing is checked off, then it's part of the password
  //covers the cases where the random password randomly does not contain a character that was necessary to fit set conditions.

  if(lowercase && !lowerArr().some(item => password.includes(item))) {
      alert("A new password will be generated... this one did not meet criteria of having at least one lowercase letters");
      generatePassword();
      return password.join("");
  }

  if(uppercase && !upperArr().some(item => password.includes(item))) {
    alert("A new password will be generated... this one did not meet criteria of having at least one uppercase letters");
    generatePassword();
    return password.join("");
  }

  if(numeric && !numberArr().some(item => password.includes(item))) {
    alert("A new password will be generated... this one did not meet criteria of having at least one number character");
    generatePassword();
    return password.join("");
  }

  if(specialChar && !specialCharArr().some(item => password.includes(item))) {
    alert("A new password will be generated... this one did not meet criteria of having at least one number character");
    generatePassword();
    return password.join("");
  }

  return password.join("");
}

//creates the random array which is to be the password
function createRandomArray(passwordLength, allChars) {
  
  var password = [];

  for (var i=0; i<passwordLength; i++) {
    password.push(allChars[Math.random() * allChars.length>>0]);
    
  }

  //console.log(password.join(""));
  return password;

}

//creates pool of special characters to be randomly selected from
function specialCharArr () {
  var specialCharArr = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
  return specialCharArr;
}

//creates pool of lowercase characters to be randomly selected from
function lowerArr () {
  var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return lowerArr;
}

//creates pool of uppercase characters to be randomly selected from
function upperArr () {
  var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  return upperArr;
}

//creates pool of number characters to be randomly selected from
function numberArr () {
  var numberArr = ["0","1", "2", "3","4", "5", "6","7", "8", "9"];
  return numberArr;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
