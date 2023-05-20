
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    hmin = d.getMinutes();
    hsec = d.getSeconds();
    hrot=(30*htime+ .5*hmin);
    mrot=(6*hmin);
    srot=(6*hsec);
    document.getElementById("sec").style.transform = `rotate(${srot}deg)`;
    document.getElementById("hour").style.transform = `rotate(${hrot}deg)`;
    document.getElementById("min").style.transform = `rotate(${mrot}deg)`;

}, 1000);



