'use strict';

//#1
function getMinsToEndOfDay(date) { 
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
    let difference = tomorrow - date;
    return Math.round((difference / 60000) * 100) / 100;
}
let today = new Date();
console.log(getMinsToEndOfDay(today));

//#2
function getSeconds(date) { 
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}
let today1 = new Date();
console.log(getSeconds(today1));

//#3 
function getNameOfDay(date) {
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}
let someDate = new Date(2013, 0, 25);
console.log(getNameOfDay(someDate));

//#4
let date = prompt('Please enter your date of birth in the format 1990-10-01', '');
function getAmountOfDays(dateOfBirth) {
    let birthday = new Date(Date.parse(dateOfBirth))
    let today2 = new Date();
    birthday.setFullYear(+today2.getFullYear());
    if (birthday <= today2) {
        birthday.setFullYear(+birthday.getFullYear() + 1);
      }
    let ms = 24*60*60*1000;
    let different =  Math.round((+birthday - today2) / ms);
    return alert(different  + ' days until your birthday');
}
console.log(getAmountOfDays(date));

