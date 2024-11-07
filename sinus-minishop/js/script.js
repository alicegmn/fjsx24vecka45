// Code here!

@ -1 +1,88 @@
// Code here!
// 1. Byt namn på första hoodien från Ash till Potato.

document.querySelector(".art-1 h3").innerText = 'Potato';

// 2. Byt namn på Home till Start.

document.querySelector("nav a").innerText = 'Start';

// 3. Byt namn på Contact till Mail Us.

document.querySelectorAll("nav a")[2].innerText = 'Mail Us';

// 4. Byt ut informationen om Sinus Hoodie - Fire.

document.querySelector(".art-2 p").innerText = `This shirt is just so cool, but ehm like the opposite. It's very hot because you know... IT'S FIRE.`;

// 5. Byt bakgrundsfärg och text på en knapp.

let fireHoodieButton = document.querySelector(".art-2 button");

fireHoodieButton.style.backgroundColor = 'tomato'; 

fireHoodieButton.innerText = 'Get hot!';

// 6. Byt bakgrundsfärg på någon av produkterna.

document.querySelector('.art-3').style.backgroundColor = 'lightgreen';

// 7. Byt ut adressen på sidan.

document.querySelector('footer article:nth-of-type(2) p').innerHTML = "Sinus Skateboards<br>Curbvägen 99<br>114 14 FTP";

// 8. Byt färg på samtliga <p>.

document.querySelectorAll('p').forEach(function(p) {
    p.style.color = 'purple';
});

// 9. Ändra text på samtliga knappar till add to cart.

document.querySelectorAll('button').forEach(function(button) {
    button.innerText = 'Add to cart';
});

// 10. Lägg till classen active på menyalternativet home.

let homeInNav = document.querySelector('nav a').className = 'active';

// 11. Ta bort classen logo på logotypen.

// document.querySelector('img').classList.remove('logo');

// 12. Lägg till ett nytt menyalternativ.
let newMenuItem = document.createElement('a');

newMenuItem.innerText = 'Hotdogs';

document.querySelector('nav').insertBefore(newMenuItem, document.querySelector('nav a:last-of-type').nextSibling);

// 13. Lägg till en ny produkt med följande info.

let art4 = document.createElement('article');

art4.innerHTML = `<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure> <h2>Sinus Hoodie</h2> <h3>Forrest</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>`;

document.querySelector('main').appendChild(art4);

// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";


const logo = document.querySelector(".logo");

logo.addEventListener('click', function () {
    console.log("Found you!");
})

// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".

let articles = Array.from(document.querySelectorAll("main article"));

console.log(articles);

articles.forEach(article => {
    article.addEventListener('click', function() {
        let h3 = article.querySelector('h3').innerText; // Hämta texten från h3
        console.log(`Hi, I'm article ${h3}`);        
    });
});