


// Arrays for characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var arrayForPassword = [];
// var generatedPasswordArr = [];

function generatePassword(){
console.log("generate password function");


//get input values and validate

var passwordLength = prompt("How long would you like your password to be?");
console.log(passwordLength);

if (passwordLength < 8) {
  alert("Password must be greater than 8 and less than 128")
  return
}

if (passwordLength > 128) {
  alert("Password must be less than 128, but greater than 8")
  return
}

var hasLowerCase = confirm("Do you want to include lowercase characters?");


var hasNumSet = confirm("Do you want to include numbers?");


var hasSpecialSet = confirm("Do you want to include special characters?");


var hasUpperCase = confirm("Do you want to include uppercase characters");
  


if (hasLowerCase == false && hasUpperCase == false && hasNumSet == false && hasSpecialSet == false) {
  alert("Please select at least one character type!");
  return
}

// group selected characters
if (hasLowerCase) {
  arrayForPassword = arrayForPassword.concat(lowerCase);
}

if (hasNumSet) {
  arrayForPassword = arrayForPassword.concat(numSet);
} 

if (hasSpecialSet) {
  arrayForPassword = arrayForPassword.concat(specialSet);
}

if (hasUpperCase) {
  arrayForPassword = arrayForPassword.concat(upperCase);
}



// pick random cards out of new pool for length of password
let passwordText = ""
for (let i = 0; i < passwordLength; i++) {
  let rng =[Math.floor(Math.random() * arrayForPassword.length)];
  // or finalPassword += possibleCharacters[];
  passwordText = passwordText + arrayForPassword[rng];
}
return passwordText;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



