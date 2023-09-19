const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickupgrade = document.getElementById("clickupgrade");

let numberOfCookies = 0;
let costofclickupgrade = 20;
let clickupgradeincrease = 1;

// {} - scope
cookie.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies += clickupgradeincrease;
    console.log(numberOfCookies);
    counter.innerHTML = "Cookies: " + numberOfCookies;
    if (numberOfCookies == 100) {

        alert("100 susenek");

        console.log("100 susenek wow");

    }
}
const clickupgradefunction = () => {
    // zkusi  pokud pocet susenek je vetsi nebo roven cene upgradu
    if (numberOfCookies >= costofclickupgrade) {
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
function cheats( ){
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
    