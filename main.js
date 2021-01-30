

function glupiEim(){
    let czasTeraz = new Date();


    let koniecEimu = new Date(2021, 0, 29, 17, 12, 0, 0);
    let ileOdeimu = czasTeraz.getTime() - koniecEimu.getTime();
    let s = ileOdeimu / 1000;   
    let min = s / 60;              
    let h = min / 60;   
    let d = h / 24;
     
    let sLeft = Math.floor(s  % 60);   
    let minLeft = Math.floor(min % 60); 
    let hLeft = Math.floor(h % 24);      
    let dLeft =  Math.floor(d);
    let dayname = " dni ";
    if(dLeft == 1)
        dayname = " dzien ";
    return dLeft + dayname + hLeft + " godzin " + minLeft + " minut " +  sLeft + " sekund";        
}      

function randomBackground(){
    let r = Math.floor(Math.random() * (254)) + 0;
    let g = Math.floor(Math.random() * (254)) + 0;
    let b = Math.floor(Math.random() * (254)) + 0;
    return "rgb(" + r + "," + g + "," + b + ")";
}

window.onload = function()
{
    document.body.style.background = randomBackground();
    idElement = "czas";
    document.getElementById(idElement).innerHTML = glupiEim();
    setInterval("document.getElementById(idElement).innerHTML = glupiEim()", 1000);
};