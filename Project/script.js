// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// create string to declare constants for each requirement of password
var passReqs = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz', //strings for each specification
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

function generatePassword() {  // creating the function to collect user input and create password
  var passwordContents = ""; //var used to store specification choice

  var length = window.prompt("Choose password length 8-128 charcters");
//prompting user to choose their length 
  var lowercase = window.confirm("Use lowercase letters?");
    if (lowercase) {
      passwordContents += passReqs.lowercase; // if user chooses lowercase, concatenate the lowercase string to the passwordContents string, repeat for each password requirement
    };

  var uppercase = window.confirm("Use uppercase letters?");
    if (uppercase) {
      passwordContents += passReqs.uppercase;
    };

  var symbols = window.confirm("Use special characters?");
    if (symbols) {
      passwordContents += passReqs.symbols;
    };

  var numbers = window.confirm("Use numbers?");
    if (numbers) {
      passwordContents += passReqs.numbers;
    };

  var passwordRand = ""; // create empty string to store generated password in
    for (let i = 0; i < length; i++) {  
     passwordRand += passwordContents[Math.floor(Math.random() * passwordContents.length)]
    }
  //while the integer is less than the user length, increase until same lenght
  //run math.random on the user chosen passwordContents, add it to the passwordRand
  // to generate the random password based on the input
  return passwordRand; // returning the random password 
}

generateBtn.addEventListener("click", writePassword);
