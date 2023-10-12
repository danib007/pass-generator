const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");


function generatePasswords() {
  // Declares a variable called password and assign its value to an empty string
  let password1 = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    // Adds the new random chars to the password string
    password1 += characters[randomIndex];
  }
  return password1;
}

function getGeneratePasswords() {
  // Displays the message in the password-el using passwordEl.textContent
  password1El.innerHTML = generatePasswords()
  password2El.innerHTML = generatePasswords()
}

console.log(generatePasswords())
