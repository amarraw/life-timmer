
let isDOB = false;
let Dob ;
const settingIconEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");

const initial = document.getElementById("initial")
const after = document.getElementById("after")
const dobButton = document.getElementById("dobButton")
const dobInput = document.getElementById("dobInput")

const yearEl = document.getElementById("year")
const monthEl = document.getElementById("month")
const dayEl = document.getElementById("day")
const hourEl = document.getElementById("hour")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

// settingIcon.addEventListener("click", function () {
//     settingContent.classList.toggle("show");
// });

const makeTwoDigitNumber = (number) => {
    return number > 9 ? number : `0${number}`
};

const toggleDob = () => {
    if(isDOB){
        settingContentEl.classList.add("hide")
    }else{
        settingContentEl.classList.remove("hide")
    };
    isDOB = !isDOB;
};

const updateAge = () => {
    if(!dateOfBirth){
        alert("Please, Enter a valid DOB")
        return;
    }
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;

    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 30)) % 12);
    const day = Math.floor((dateDiff / (1000 * 60 * 60 * 24)) % 30);
    const hour = Math.floor((dateDiff / (1000 * 60 * 60)) % 24);
    const minute = Math.floor((dateDiff / (1000 * 60)) % 60);
    const second = Math.floor((dateDiff / 1000) % 60);

    yearEl.textContent = makeTwoDigitNumber(year);
    monthEl.textContent = makeTwoDigitNumber(month);
    dayEl.textContent = makeTwoDigitNumber(day);
    hourEl.textContent = makeTwoDigitNumber(hour);
    minutesEl.textContent = makeTwoDigitNumber(minute);
    secondsEl.textContent = makeTwoDigitNumber(second);

};

const setDob = () => {
    const dateString = dobInput.value;
    dateOfBirth = new Date(dateString)

    
    if (dateOfBirth){
        
        localStorage.setItem("dob", dateString);

        initial.classList.add("hide")
        after.classList.remove("hide")
        updateAge();
        setInterval(()=> updateAge(),1000)
    }else{
        
        initial.classList.remove("hide")
        after.classList.add("hide")
    };
};



settingIcon.addEventListener("click", toggleDob);
dobButton.addEventListener("click", setDob);

window.onload = () => {
    const savedDob = localStorage.getItem("dob");
    if (savedDob) {
        dateOfBirth = new Date(savedDob);
        initial.classList.add("hide");
        after.classList.remove("hide");
        updateAge();
        setInterval(() => updateAge(), 1000);
    }
};
