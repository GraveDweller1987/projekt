const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickupgrade = document.getElementById("clickupgrade");
const autoclick = document.getElementById("autoclick");
const death = document.getElementById("death")
const randomcolor = document.getElementById("barva")
const test = document.getElementById("test")
const epilepsy = document.getElementById("I_Love_drugs")

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
let epi_cost = 1


epilepsy.onclick = () => {
    let intervalTrip = setInterval(epilepsyTrip, 100);
}

function epilepsyTrip() {
    nah_barva();
}

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
cookie.onclick = (e) => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies += clickupgradeincrease;
    const clickText = document.createElement("div");
    clickText.className = "clicktext";
    clickText.style.left = `${e.clientX + window.scrollX}px`;
    clickText.style.top = `${e.clientY + window.scrollY}px`;
    clickText.innerText = "+ " + clickupgradeincrease;

    document.body.appendChild(clickText);

    setTimeout(() => {

        clickText.remove();

    }, 1990);
    console.log(numberOfCookies);
    counter.innerHTML = "Pills Eaten: " + numberOfCookies;
    audio.play();
    pillCheck()
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
        pillCheck()
    }
}

randomcolor.onclick = () => { 

    if(numberOfCookies >= colorcost){    numberOfCookies -= colorcost;
        counter.innerText = "Pills Eaten: " + numberOfCookies;
        nah_barva();
        pillCheck()
    }


}

function pillCheck() {
    if (numberOfCookies >= costofclickupgrade) {
        clickupgrade.style.color = "aqua";
        clickupgrade.style.pointerEvents = "auto";
    }
    if (numberOfCookies < costofclickupgrade) {
        clickupgrade.style.color = "white";
        clickupgrade.style.pointerEvents = "none";
    }
    if (numberOfCookies >= colorcost) {
        randomcolor.style.color = "aqua";
        randomcolor.style.pointerEvents = "auto";
    }
    if (numberOfCookies < colorcost) {
        randomcolor.style.color = "white";
        randomcolor.style.pointerEvents = "none";
    }
    if (numberOfCookies >= deathcost) {
        death.style.color = "aqua";
        death.style.pointerEvents = "auto";
    }
    if (numberOfCookies < deathcost) {
        death.style.color = "white";
        death.style.pointerEvents = "none";
    }
    if (numberOfCookies >= autoclickercost) {
        autoclick.style.color = "aqua";
        autoclick.style.pointerEvents = "auto";
    }
    if (numberOfCookies < autoclickercost) {
        autoclick.style.color = "white";
        autoclick.style.pointerEvents = "none";
    }
    if (numberOfCookies >= epi_cost) {
        epilepsy.style.color = "aqua";
        epilepsy.style.pointerEvents = "auto";
    }
    if (numberOfCookies < epi_cost) {
        epilepsy.style.color = "white";
        epilepsy.style.pointerEvents = "none";
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


    
