let dayInput = document.querySelector(".day");
let monthInput = document.querySelector(".month");
let yearInput = document.querySelector(".year");
let calcbutton = document.getElementById("calculate");
let YearText = document.querySelector(".year-text");
let MonthText = document.querySelector(".month-text");
let DaysText = document.querySelector(".days-text");
let today = new Date();
let birthDate;



const calculation = ()=>{
    birthDate = new Date(`${parseInt(monthInput.value)}/${parseInt(dayInput.value)}/${parseInt(yearInput.value)}`);
    YearText.textContent = Math.abs(today.getFullYear()- birthDate.getFullYear());
    MonthText.textContent = Math.abs(today.getMonth()- birthDate.getMonth());
    DaysText.textContent = Math.abs(today.getDate() - birthDate.getDate());
}
calcbutton.addEventListener("click", () => {
   if(parseInt(dayInput.value) <= 0 || parseInt(dayInput.value) > 31){
    alert("Sehv gun daxil etdiniz");
   }else if (parseInt(monthInput.value)<= 0 || parseInt(monthInput.value)>12){
    alert("sehv ay daxil etdiniz")
   }else if (parseInt(yearInput.value)<= 0 || parseInt(yearInput.value) > today.getFullYear()){
    alert("sehv il daxil etdiniz")
   } else{
    calculation()
   }
});



