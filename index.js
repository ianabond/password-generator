const upper = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lower = [..."abcdefghijklmnopqrstuvwxyz"];
const numbers = [..."0123456789"];
const symbols = [..."!@#$%^&*()-_=+[]{};:'\",.<>/?\\|`~"];

let allChars = [];
let password1 = document.getElementById("pass1");
let password2 = document.getElementById("pass2");
let generate = document.getElementById("generate");

// console.log(allChars);
// console.log(allChars.length);
function getRandomIndex() {
    let randomNum =  Math.floor(Math.random() * allChars.length);
    return randomNum;
}
generate.addEventListener("click", () => {

    let passLength = parseInt(document.querySelector('input[name="pass-len"]:checked').value);
    let useUpper = document.getElementById("uppercase").checked;
    let useLower = document.getElementById("lowercase").checked;
    let useNumbers = document.getElementById("numbers").checked;
    let useSymbols = document.getElementById("symbols").checked;
    
    password1.textContent = "";
    password2.textContent = "";
    allChars = [];

    if(!useLower && !useUpper && !useNumbers && !useSymbols) {
        allChars.push(...upper);
        allChars.push(...lower);
        allChars.push(...numbers);
        allChars.push(...symbols);
    }
    if(useLower) {
        allChars.push(...lower);
    }
    if(useUpper) {
        allChars.push(...upper);
    }
    if(useNumbers) {
        allChars.push(...numbers);
    }
    if(useSymbols) {
        allChars.push(...symbols);
    }
  
    for(let i = 0; i < passLength; i++) {
        password1.textContent += allChars[getRandomIndex()];
        password2.textContent += allChars[getRandomIndex()];
    }

    password1.classList.remove("opacity-0");
    password2.classList.remove("opacity-0");
});