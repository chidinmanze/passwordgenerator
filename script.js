// Assignment Code

var specialCharacters = [
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  '(',
  ')',
  '*',
  '+',
  '-',
  "'",
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~'
]
var upperCaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
var lowerCaseCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Password requirement questions (length, character types)

// Length 8 - 128 characters
function writePassword() {
  
  // var passwordText ={function generatePassword () {
  var passwordLength = parseInt(prompt("How long do you want your password to be? Choose a length between 8 and 128."));
  console.log("You said"  +  passwordLength);
  console.log(typeof passwordLength)
  
  if (isNaN(passwordLength)){
    return alert("password length must be a number");
  }
  if (passwordLength < 8 && passwordLength > 128 ){
    return alert("Password must be between 8 and 128 characters long.");
  }
  // Lowercase characters (yes or no)
  var lowerc = confirm("Include lowercase?");
  if (lowerc === true) {
    console.log("You said yes to lowercase");
  }
  else {
    console.log("You said no to lowercase");
  }
  
  // Uppercase characters (yes or no)
  var upperc = confirm("Include uppercase?");
  
  if (upperc === true) {
    console.log("You said yes to uppercase");
  }
  else {
    console.log("You said no to uppercase");
  }
  
  // Numbers (yes or no)
  var numbers = confirm("Include numbers?");
  
  if (numbers === true){
    console.log("You said yes to numbers");
  }
  else {
    console.log("You said no to numbers");
  }
  
  // Special characters (yes or no)
  var special = confirm("Include special characters?");
  
  if (special === true) {
    console.log("You said yes to special characters");
  }
  else {
    console.log("You said no to special characters");
  }
  
  console.log(passwordLength)
  console.log(lowerc)
  console.log(upperc)
  console.log(numbers)
  console.log(special)
  
  // conditional to create array of posssible characters
  var passwordChoice = [];
  if (lowerc === true) {passwordChoice = passwordChoice.concat(lowerCaseCharacters);
    
  }
  if (upperc === true) {passwordChoice = passwordChoice.concat(upperCaseCharacters);
    
  }
  if (numbers === true) {passwordChoice = passwordChoice.concat(numericCharacters);
    
  }
  if (special === true) {passwordChoice = passwordChoice.concat(specialCharacters);
  } 
    
    // loop to go through array until password length is met
    
    
      var passwordString=""
    for (var i = 0; i < passwordLength; i++) {
      passwordString = passwordString + passwordChoice[Math.floor(Math.random() * passwordChoice.length)];
    }
    passwordText.textContent=passwordString;
  }
   
  

           
      var generateBtn = document.querySelector("#generate");
      var passwordText = document.querySelector("#password");
   
    generateBtn.addEventListener("click", writePassword);
