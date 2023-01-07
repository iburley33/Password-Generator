// Assignment Code
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X","Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",",",".", "?", "/", "<", ">","-","_", "+", "="]
var masterOptions = [];
var masterLength;
// Assignment Code
var generateBtn = document.querySelector("#generate");

function checkLength (password) {
  if (typeof(parseInt(password))!=="number"){
    window.alert("You did not enter a value between 8 and 128")
    return false
  }
  if (password < 8 || password > 128) {
    window.alert("You did not enter a value between 8 and 128")
    return false
  } 
  masterLength = password;
  return password
}
function promptUserLength() {
  var pwLength = window.prompt("How long is this password?")
  return checkLength(pwLength)
}
function promptAll() {
  var incLower = window.confirm ("Would you like to include lowercase letters?")
  var incUpper = window.confirm ("Would you like to include uppercase letters?")
  var incNum = window.confirm ("Would you like to include numbers?")
  var incSymbol = window.confirm ("Would you like to include symbols?")
  return {incLower, incUpper, incNum, incSymbol}
}
function generatePassword() {
var passwordValues = [];  
  for (let i = 0; i < masterLength; i++) {
    var randomInt = getRandomInd(masterOptions.length);
    var randomVal = masterOptions[randomInt]
    passwordValues.push(randomVal)
  } return passwordValues.join('')
}
function getRandomInd(value) {
var index = Math.floor(Math.random() * value)
return index
} 


// Write password to the #password input
function writePassword() {
  var validLength = promptUserLength();
  if (validLength){
    var res = promptAll()
    console.log(res)
  }
  if (res.incLower) {
    masterOptions = lowerCase
  }
  if (res.incUpper) {
    masterOptions = masterOptions.concat(upperCase)
  }
  if (res.incNum) {
    masterOptions = masterOptions.concat(numbers)
  }
  if (res.incSymbol) {
    masterOptions = masterOptions.concat(symbols)
  }
  if (!res.incLower && !res.incUpper && !res.incNum && !incSymbol) {
    window.alert("You must select at least 1 option.")
  }
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
