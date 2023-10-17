const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickupgrade = document.getElementById("clickupgrade");
const autoclick = document.getElementById("autoclick");
const death = document.getElementById("death")
const randomcolor = document.getElementById("barva")
const test = document.getElementById("test")

let numberOfCookies = 0;
let costofclickupgrade = 20;
let clickupgradeincrease = 1;
let autoclickincrease = 0;
let autoclicker;
let autoclickercost = 100;
let deathcost = 1000000
let colorcost = 1000
let testcost = 1
let testnumber = Math. random() < 0.5;



function updateInfo() {
    document.title = numberOfCookies;
    //nefacha kdo vi proc
}



function gamble() {
    console.log("gamble");
    if (testnumber > 0.5) {
        numberOfCookies += 1000000;
    }
}

death.onclick = () => {
    if (numberOfCookies >= deathcost) {
        window.open('', '_self', ''); window.close();
    }
}

autoclick.onclick = () => {
    if (numberOfCookies >= autoclickercost) {
        //odecist susenky
        numberOfCookies -= autoclickercost;
        autoclickercost *= 2;
        autoclick.innerText = "Buy auto Eater: " + autoclickercost
        //numberofcookies = numberofcookies - 100
        //aktualizovat odstavec
        counter.innerHTML = "Pills Eaten: " + numberOfCookies;
        autoclickincrease++;
        //clear
        clearInterval(autoclicker)
        //zpustit interval
        autoclicker = setInterval(() => {
            //zvednout o nejake cislo 
            numberOfCookies += autoclickincrease;
            //aktualizovat odstavec
            counter.innerHTML = "Pills Eaten: " + numberOfCookies;

        }, 1000)
        
       
    }
    
}



// {} - scope
cookie.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies += clickupgradeincrease;
    console.log(numberOfCookies);
    counter.innerHTML = "Pills Eaten: " + numberOfCookies;
    audio.play()
}
const clickupgradefunction = () => {
    // zkusi  pokud pocet susenek je vetsi nebo roven cene upgradu
    if (numberOfCookies >= costofclickupgrade) {
       // costofclickupgrade *= 2;
        //odecteme cenu upgradu
        //pocet susenek a odectu 20 (cena upgradu)
        numberOfCookies -= costofclickupgrade;
        costofclickupgrade *= 2;
        clickupgrade.innerText = "Buy Faster Eater: " + costofclickupgrade
        //aktuaizace
        counter.innerText = "Pills Eaten: " + numberOfCookies;

        //zvedneme pocet susenek na kliknuti
        clickupgradeincrease++;
    }
}

randomcolor.onclick = () => { 

    if(numberOfCookies >= colorcost){    numberOfCookies -= colorcost;
        counter.innerText = "Pills Eaten: " + numberOfCookies;
        nah_barva()
    }


}

clickupgrade.onclick = clickupgradefunction;
//tvorba funkce
//function nazev()
function cheats(){
   console.log("cheats on");
    numberOfCookies += 1000000;
    counter.innerText = "Pills Eaten: " + numberOfCookies
}
//spuštění funkce
//cheats();
const cheatsTwo = () => {
    numberOfCookies += 1000000;
    counter.innerText = "Pills Eaten: " + numberOfCookies;
}
//cheatsTwo();
function loads(){
    console.log("cheats on");
     numberOfCookies += 1000000000000000000000000000000000000000000000;
     counter.innerText = "Pills Eaten: " + numberOfCookies
 }


function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

  function nah_barva() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

    
