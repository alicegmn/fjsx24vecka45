console.log("GOOOD MORNING FJSX24!");

// Metoden createElement

// "createElement är en metod som låter oss skapa nya HTML-element med JavaScript."

// "Syntaxen är:
//  document.createElement('tagName'); där tagName är namnet på det element du vill skapa, till exempel 'div', 'p', eller 'li'."

// Exempel:
// let nyParagraf = document.createElement('p');
// ------------------------------------------------------------------------------

// Metoden appendChild

// "appendChild används för att lägga till ett barn-element till ett förälder-element."

// "Syntaxen är:
// parentElement.appendChild(childElement);"

// Exempel:

// let innehåll = document.getElementById('innehåll');
// innehåll.appendChild(nyParagraf);
// ------------------------------------------------------------------------------

// Metoden removeChild

// "removeChild används för att ta bort ett barn-element från dess förälder."

// "Syntaxen är: parentElement.removeChild(childElement);"

// innehåll.removeChild(nyParagraf);

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// Exempel: Lägga till en Ny Paragraf

let innehåll = document.getElementById("innehåll");

let nyParagraf = document.createElement("p");
nyParagraf.textContent = "Detta är en ny paragraf som lagts till dynamiskt.";

innehåll.appendChild(nyParagraf);

("Här skapar vi en ny paragraf, sätter dess textinnehåll, och lägger till den som ett barn till div-elementet med id='innehåll'.");
// ------------------------------------------------------------------------------

// Exempel: Ta Bort en Paragraf
// Ta bort den nya paragrafen efter 5 sekunder
setTimeout(function () {
  innehåll.removeChild(nyParagraf);
}, 5000);

("Här använder vi setTimeout för att vänta i 5 sekunder innan vi tar bort den nya paragrafen.");
("Vi anropar removeChild på förälderelementet och skickar in barnet vi vill ta bort.");
// ------------------------------------------------------------------------------

// Exempel: Skapa en Lista från en Array

let frukter = ["Äpple", "Banana", "Apelsin", "Jordgubbe"];

let lista = document.createElement("ul");

frukter.forEach(function (frukt) {
  let listItem = document.createElement("li");
  listItem.textContent = frukt;
  lista.appendChild(listItem);
});

innehåll.appendChild(lista);

("Här skapar vi en ul-lista och lägger till li-element för varje frukt i vår array.");
("Sedan lägger vi till hela listan till vår innehåll-div.");

// ---------------------------------------------

// Här kan ni skriva er JavaScript-kod för övningarna.

// Exempel: Lägg till och Ta Bort Paragrafer

let läggTillKnapp = document.getElementById("läggTillKnapp");
let taBortKnapp = document.getElementById("taBortKnapp");
let innehåll = document.getElementById("innehåll");
let räknare = 1;

läggTillKnapp.addEventListener("click", function () {
  let nyParagraf = document.createElement("p");
  nyParagraf.textContent = "Detta är paragraf " + räknare;
  innehåll.appendChild(nyParagraf);
  räknare++;
});

taBortKnapp.addEventListener("click", function () {
  if (innehåll.lastElementChild.tagName === "P") {
    innehåll.removeChild(innehåll.lastElementChild);
    räknare--;
  } else {
    alert("Det finns inga fler paragrafer att ta bort.");
  }
});
console.log("GOOOD MORNING FJSX24!");

// Metoden createElement

// "createElement är en metod som låter oss skapa nya HTML-element med JavaScript."

// "Syntaxen är:
//  document.createElement('tagName'); där tagName är namnet på det element du vill skapa, till exempel 'div', 'p', eller 'li'."

// Exempel:
// let nyParagraf = document.createElement('p');

// Metoden appendChild

// "appendChild används för att lägga till ett barn-element till ett förälder-element."

// "Syntaxen är:
// parentElement.appendChild(childElement);"

// Exempel:

// let innehåll = document.getElementById('innehåll');
// innehåll.appendChild(nyParagraf);

// Metoden removeChild

// "removeChild används för att ta bort ett barn-element från dess förälder."

// "Syntaxen är: parentElement.removeChild(childElement);"

// innehåll.removeChild(nyParagraf);

// -------------------------------------------

// Exempel: Lägga till en Ny Paragraf

let innehåll = document.getElementById("innehåll");

let nyParagraf = document.createElement("p");
nyParagraf.textContent = "Detta är en ny paragraf som lagts till dynamiskt.";

innehåll.appendChild(nyParagraf);

("Här skapar vi en ny paragraf, sätter dess textinnehåll, och lägger till den som ett barn till div-elementet med id='innehåll'.");

// Exempel: Ta Bort en Paragraf
// Ta bort den nya paragrafen efter 5 sekunder
setTimeout(function () {
  innehåll.removeChild(nyParagraf);
}, 5000);

("Här använder vi setTimeout för att vänta i 5 sekunder innan vi tar bort den nya paragrafen.");
("Vi anropar removeChild på förälderelementet och skickar in barnet vi vill ta bort.");

// Exempel: Skapa en Lista från en Array

let frukter = ["Äpple", "Banana", "Apelsin", "Jordgubbe"];

let lista = document.createElement("ul");

frukter.forEach(function (frukt) {
  let listItem = document.createElement("li");
  listItem.textContent = frukt;
  lista.appendChild(listItem);
});

innehåll.appendChild(lista);

("Här skapar vi en ul-lista och lägger till li-element för varje frukt i vår array.");
("Sedan lägger vi till hela listan till vår innehåll-div.");

// ---------------------------------------------

// Här kan ni skriva er JavaScript-kod för övningarna.

// Exempel: Lägg till och Ta Bort Paragrafer

let läggTillKnapp = document.getElementById("läggTillKnapp");
let taBortKnapp = document.getElementById("taBortKnapp");
let innehåll = document.getElementById("innehåll");
let räknare = 1;

läggTillKnapp.addEventListener("click", function () {
  let nyParagraf = document.createElement("p");
  nyParagraf.textContent = "Detta är paragraf " + räknare;
  innehåll.appendChild(nyParagraf);
  räknare++;
});

taBortKnapp.addEventListener("click", function () {
  if (innehåll.lastElementChild.tagName === "P") {
    innehåll.removeChild(innehåll.lastElementChild);
    räknare--;
  } else {
    alert("Det finns inga fler paragrafer att ta bort.");
  }
});
