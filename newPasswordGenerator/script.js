let passLength = document.querySelector(".num");
let range = document.getElementById("range");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lovercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbol");
let generateBtn = document.getElementById("btn");
let Password = document.querySelector(".passvalue");
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const special = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

range.addEventListener("input",(e)=>{
    passLength.textContent = e.target.value;
     let x = e.target.value;
    range.style.background = `linear-gradient(90deg, rgba(2,0,36,1) ${x*5}%, rgba(9,9,121,1) ${x*5}%)`

});



function generatePassword() {
    let selectedSymbols = [];
    
    if (uppercase.checked) {
      selectedSymbols.push(upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)])
    }  
    if (lowercase.checked) {
      selectedSymbols.push(lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)])
    } 
    if (number.checked) {
      selectedSymbols.push(numbers[Math.floor(Math.random()*numbers.length)])
    } 
    if (symbols.checked) {
      selectedSymbols.push(special[Math.floor(Math.random()*special.length)])
    } 
    if(selectedSymbols.length == 0){
      return " "
    }
  
    return selectedSymbols[Math.floor(Math.random()*selectedSymbols.length)]
  
  };


  const getPass = ()=>{
    myPassword = ""
    for(let i= 0; i <range.value; i++){
      myPassword+= generatePassword();
    }
    Password.textContent = myPassword;
  }

  generateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    getPass()

  })



 




