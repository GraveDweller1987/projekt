const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickupgrade = document.getElementById("clickupgrade");
const autoclick = document.getElementById("autoclick");

let numberOfCookies = 0;
let costofclickupgrade = 20;
let clickupgradeincrease = 1;
let autoclickincrease = 0;
let autoclicker;
let autoclickercost = 100;

autoclick.onclick = () => {
    if (numberOfCookies >= autoclickercost) {
        //odecist susenky
        numberOfCookies -= autoclickercost;
        autoclickercost *= 2;
        autoclick.innerText = "Buy autoclick: " + autoclickercost
        //numberofcookies = numberofcookies - 100
        //aktualizovat odstavec
        counter.innerHTML = "Cookies: " + numberOfCookies;
        autoclickincrease++;
        //clear
        clearInterval(autoclicker)
        //zpustit interval
        autoclicker = setInterval(() => {
            //zvednout o nejake cislo 
            numberOfCookies += autoclickincrease;
            //aktualizovat odstavec
            counter.innerHTML = "Cookies: " + numberOfCookies;
            
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
    counter.innerHTML = "Cookies: " + numberOfCookies;
}
const clickupgradefunction = () => {
    // zkusi  pokud pocet susenek je vetsi nebo roven cene upgradu
    if (numberOfCookies >= costofclickupgrade) {
       // costofclickupgrade *= 2;
        //odecteme cenu upgradu
        //pocet susenek a odectu 20 (cena upgradu)
        numberOfCookies -= costofclickupgrade;

        //aktuaizace
        counter.innerText = "Cookies: " + numberOfCookies;

        //zvedneme pocet susenek na kliknuti
        clickupgradeincrease++;
    }
}

clickupgrade.onclick = clickupgradefunction;
//tvorba funkce
//function nazev()
function cheats(){
   console.log("cheats on");
    numberOfCookies += 1000000;
    counter.innerText = "Cookies: " + numberOfCookies
}
//spuštění funkce
//cheats();
const cheatsTwo = () => {
    numberOfCookies += 1000000;
    counter.innerText = "Cookies: " + numberOfCookies;
}
//cheatsTwo();
function loads(){
    console.log("cheats on");
     numberOfCookies += 1000000000000000000000000000000000000000000000;
     counter.innerText = "Cookies: " + numberOfCookies
 }
cheats()
    