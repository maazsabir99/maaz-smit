function setTime() {
    var date = new Date();

    if (date.getHours() > 12) {
        hour.innerText = date.getHours() - 12;
    } else if (date.getHours() === 0) {
        hour.innerText = "12";
    } else {
        hour.innerText = date.getHours();
    }

    min.innerText = date.getMinutes();
    sec.innerText = date.getSeconds();

    if (date.getHours() >= 12) {
        mer.innerText = "PM";
    } else {
        mer.innerText = "AM";
    }
}

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function setDate() {
    var date = new Date();
    day.innerText = days[date.getDay()];
    dte.innerText = date.getDate();
    mont.innerText = months[date.getMonth()];
    year.innerText = date.getFullYear();
}

setInterval(() => {
    setTime();
}, 1000);

setTime();
setDate();



