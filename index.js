const upper = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lower = [..."abcdefghijklmnopqrstuvwxyz"];
const numbers = [..."0123456789"];
const symbols = [..."!@#$%^&*()-_=+[]{};:'\",.<>/?\\|`~"];

let allChars = [];
let password1 = document.getElementById("pass1");
let password2 = document.getElementById("pass2");
let generate = document.getElementById("generate");
let error = document.getElementById("error");

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

    if(!useLower && !useUpper && !useNumbers && !useSymbols) {
        error.classList.remove("opacity-0");
        return;
    }
    else {
        error.classList.add("opacity-0");
    }

    password1.textContent = "";
    password2.textContent = "";
    allChars = [];

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

password1.addEventListener("click", () => {
    if (!password1.textContent) {
        return;
    }
    navigator.clipboard.writeText(password1.textContent);
    let currentPassword1 = password1.textContent;
    password1.textContent = "Copied!";

    setTimeout(() => {
        password1.textContent = currentPassword1;
    }, 1000);
});

password2.addEventListener("click", () => {
    if (!password2.textContent) {
        return;
    }
    navigator.clipboard.writeText(password2.textContent);
    let currentPassword2 = password2.textContent;
    password2.textContent = "Copied!";

    setTimeout(() => {
        password2.textContent = currentPassword2;
    }, 1000);
});