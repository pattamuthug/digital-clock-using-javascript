
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];

var x = function () {
    var time = new Date();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();
    let dd = time.getDate();
    let mnt = time.getMonth();
    let yy = time.getFullYear();
    let day = time.getDay();
     
    let hour = document.getElementById("hh");
    hour.innerText = hh;
    let minute = document.getElementById("mm");
    minute.innerText = mm;
    let second = document.getElementById("ss");
    second.innerText = ss;
    let date = document.getElementById("dd");
    date.innerText = dd;
    let month1 = document.getElementById("month");
    month1.innerText = months[mnt];
    let year = document.getElementById("yy");
    year.innerText = yy;
    let session = document.getElementById("session");
    
    let day1 = document.getElementById("day");
    day1.innerText = days[day];
    if (hh == 0) {

        session.innerText = "AM";
    } if (hh > 12) {
        session.innerText = "PM";
    }
}

setInterval(x, 1000);