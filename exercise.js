console.log("Onsdag 6/11 övningar");

// Övning 1: Enkel Räknare

// Uppgift:
// Skapa två knappar:

// En med id="ökaKnapp" och texten "Öka".
// En med id="minskaKnapp" och texten "Minska".
// **Lägg till ett p-element med id="räknare" som visar startvärdet 0.

// Använd JavaScript för att:

// Lägga till event listeners på knapparna.
// När "Öka" klickas, öka värdet med 1 och uppdatera texten i p-elementet.

// När "Minska" klickas, minska värdet med 1 och uppdatera texten.
// Syfte:
// Öva på att hantera klickhändelser och uppdatera DOM baserat på användarinteraktion.

let öka = document.getElementById("ökaKnapp");

let minska = document.getElementById("minskaKnapp");

let värde = 0;

let räknare = document.getElementById("räknare");

öka.addEventListener("click", function () {
    värde++;
    räknare.textContent = värde;
});

minska.addEventListener("click", function () {
    värde--;
    räknare.textContent = värde;
});

//----------------------------

// Övning 2: Formulärvalidering

// Uppgift:
// Skapa ett formulär med ett textfält (input type="text") och en knapp (input type="submit").

// Använd JavaScript för att:

// Lyssna på submit-händelsen på formuläret.
// Förhindra standardbeteendet (att sidan laddas om) med event.preventDefault().
// Kontrollera att textfältet inte är tomt.
// Om det är tomt, visa ett felmeddelande under formuläret.
// Om det inte är tomt, visa en bekräftelse.
// Syfte:
// Öva på att hantera formulärhändelser och validera användarinmatning.

let form = document.querySelector("form");

formSubmit = form.addEventListener("submit", function submit(event) {
    event.preventDefault();
    let textFält = document.getElementById("textFält").value;
    let meddelande = document.getElementById("meddelande");

    if (textFält.trim() === "") {
        meddelande.textContent = "Fältet får inte vara tomt - skriv någonting i textfältet innan du klickar på skicka :)";
    } else {
        meddelande.textContent = "Tack för att du skrev meddelandet: " + textFält;
    }
});

// -------------------------------

// Övning 3: Ändra Bild vid Musöver

// Uppgift:
// Lägg till en bild (img) med id="minBild" och src="bild1.jpg".

// Använd JavaScript för att:

// Lyssna på mouseover och mouseout-händelser på bilden.
// När muspekaren är över bilden, ändra src till bild2.jpg.
// När muspekaren lämnar bilden, ändra tillbaka till bild1.jpg.
// Syfte:
// Öva på att hantera mus-händelser och ändra attribut på element.

// ------------------------------------------------------------------------

// Fler övningar som mängd tränar er om gårdagens och dagens ämen finns här:
// https://github.com/FJSX24/fjsx24vecka45/tree/wednesday-6nov-DOM-Bootcamp

// Blir ni klar tidigt kan ni leka runt och lägga till nya addEventListener
