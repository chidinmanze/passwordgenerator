// Assignment Code
var generateBtn = document.querySelector("generate");
document.getElementById("generate").addEventListener("click", first);


// Password requirement questions (length, character types)

// Length 8 - 128 characters
function first () {
var length = prompt("How long do you want your password to be? Choose a length between 8 and 128.");
alert("You said"  +  length);

// Lowercase characters (yes or no)
var lowerc = confirm("Include lowercase?");
if (lowerc == true) {alert("You said yes to lowercase");
}
else if (lowerc == false) {alert("You said no to lowercase");
}

// Uppercase characters (yes or no)
var upperc = confirm("Include uppercase?");
if (upperc == true) {alert("You said yes to uppercase");
}
else if (upperc == false) {alert("You said no to uppercase");
}

// Numbers (yes or no)
var numbers = confirm("Include numbers?");
if (numbers == true) {alert("You said yes to numbers");
}
else if (numbers == false) {alert("You said no to numbers");
}

// Special characters (yes or no)
var special = confirm("Include special characters?");
if (special == true) {alert("You said yes to special characters");
}
else if (special == false) {alert ("You said no to special characters");
}

console.log(length)
console.log(lowerc)
console.log(upperc)
console.log(numbers)
console.log(special)

}

// List all possible variables
var lowerctext = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperctext = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numberstext = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialtext = ['~', '`', '!', '@', '#', '$', '%', '^', '*', '_', '-', '+', '<', '>', '?', '/', '|', ',', '.']

function second (x) {
  if (lowerc == true) lowerctext.join(x)};
  if (upperc == true) upperctext.join(x);
  if (numbers == true) numberstext.join(x);
  if (special == true) specialtext.join(x);

}


function third () {
  var password = x(Math.floor(Math.random)*length);
 }




// Write password to the #password input
function writepassString() {
 third.value = password
 document.querySelector("password").innerHTML = (password);

}
