let calender = new Date();
const html_date = document.getElementById('date');

let year =calender.getFullYear();
let month =calender.getMonth();
let date = calender.getDate();
let day = calender.getDay();

let day_kor = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

html_date.innerText = `${year}-${month+1}-${date} ${day_kor[day]}`;
