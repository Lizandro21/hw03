// Assignment Code
var generateBtn = document.querySelector("#generate");

var lettersUpper = "abcdefghijklmnopqrstuvwxyz";

var lettersLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbers = "1234567890";

var symbols = "!@#$%^&*()";

var userInput = [];

var password = "";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var characterLength = 0
  while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === false) {
      characterLength = parseInt(prompt("How long would you like your password to be? 8-128 Characters"));
  }

  var symbol = false;
  var uppercase = false;
  var numb = false;
  var lowercase = false;

  while (!symbol && !uppercase && !numb && !lowercase) {
 
      symbol = confirm("Confirm for special characters like (~!@#$%^&*()-_=+)");

      uppercase = confirm("Confirm for Upper characters!");

      numb = confirm("Confirm for number characters!");

      lowercase = confirm("Confirm for Lower characters!");

  }
  if (symbol) {
      userInput.push(symbols);
  }

  if (uppercase) {
      userInput.push(lettersUpper);
  }

  if (numb) {
      userInput.push(numbers);
  }

  if (lowercase) {
      userInput.push(lettersLower);
  }

  var password = "";

  userInput = userInput.join("").split("");

  for (var p = 0; p < characterLength; p++) {
      var pass = (Math.floor(Math.random() * userInput.length));
      password = password + userInput[pass];
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);
