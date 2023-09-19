const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

let numberOfCookies = 0;

// {} - scope
cookie.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies++;
    console.log(numberOfCookies);
    counter.innerHTML = "Cookies: " + numberOfCookies;
    if (numberOfCookies == 100) {

        alert("100 susenek");

        console.log("100 susenek wow");

    }
}