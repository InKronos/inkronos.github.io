

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
    let hname = " godzin ";
    let minnanme = " minut "
    let sname = " sekund "
    if(dLeft == 1)
        dayname = " dzień ";
    if(hLeft == 1)
        hname = " godzina "
    else if(hLeft < 5 && hLeft > 1)
        hname = " godziny "    
    if(minLeft == 1)
        minnanme = "  minuta "
    else if(minLeft < 5 && minLeft > 1)
        minnanme = " minuty "   
    if(sLeft == 1 )
        sname = " sekunda "
    else if(sLeft < 5 && sLeft > 1)
        sname = " sekundy "   
    return dLeft + dayname + hLeft + hname + minLeft + minnanme +  sLeft + sname;        
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