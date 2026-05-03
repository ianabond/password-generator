const upper = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lower = [..."abcdefghijklmnopqrstuvwxyz"];
const numbers = [..."0123456789"];
const symbols = [..."!@#$%^&*()-_=+[]{};:'\",.<>/?\\|`~"];

let allChars = [...upper, ...lower, ...numbers, ...symbols];
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

    password1.textContent = "";
    password2.textContent = "";
    
    for(let i = 0; i < 15; i++) {
        password1.textContent += allChars[getRandomIndex()];
        password2.textContent += allChars[getRandomIndex()];
    }

    password1.classList.remove("opacity-0");
    password2.classList.remove("opacity-0");
});