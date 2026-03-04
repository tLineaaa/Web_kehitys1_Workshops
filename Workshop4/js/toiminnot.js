let otsikkoYksi = document.querySelector("#otsikkoYksi");
otsikkoYksi.addEventListener("click", function() {
    alert("Klikkasit minua!")
})

// Tehtävä 1: Perus DOM-muokkaus

//Ensimmäinen painike (lisätty kuuntelija ja klikistä muutetaan otsikkoa yksi)

let ekapainallus = document.querySelector("#painikeYksi");
ekapainallus.addEventListener("click", function() {
    let click1 = document.querySelector("#otsikkoYksi");
    click1.innerHTML= "<h2>Muokattu otsikko!</h2>"
})

// Toinen painike

let tokapainallus = document.querySelector("#painikeKaksi");
tokapainallus.addEventListener("click", function() {


    //muuttaa otsikon kaksi fonttikoko, tyyli, väri ja taustaväri (kyseessä kirjain O, ei nolla)

    let vaihdaO2 = document.createElement("h2");
    vaihdaO2.style.color = "green"; //värinvaihto
    vaihdaO2.style.fontFamily = "arial"; //fontin vaihto
    vaihdaO2.style.fontSize = "33px"; //fontin koon vaihto
    vaihdaO2.style.backgroundColor = "orange"; //fontin taustavärin vaihto
    vaihdaO2.textContent ="Hahaa, muokattu!"; //itse teksti

    otsikkoKaksi.innerHTML= ""; // tyhjennetään edellisestä tekstistä (koska muutoin tuli ylimääräistä tekstiä mukaan, jokin oli tästä otsikosta riippuvainen?)
    otsikkoKaksi.appendChild(vaihdaO2); //vaihdetaan otsikonKaksi tilalle vaihdaO2 (yllä)
})

// Kolmas painike
// Tässä halutiin säilyttää tekstin muotoilu, joten käytin ensin textContent,
// mutta koska vain Lorem ipsum oli <strong> ja merkitty id:llä, muutin joko vain sen
// tai sitten koko tekstiosion innerHTML:llä, jolloin menetän kahden ensimmäisen
// sanan <strong>-osion, joten lisäsin sen erikseen (ja <strong> ei toimi textContentilla)
// ¯_(ツ)_/¯
let kolmaspainallus = document.querySelector("#painikeKolme");
kolmaspainallus.addEventListener("click", function() {
    let click3 = document.querySelector("#loremloppu");
    click3.innerHTML= "<strong>Lasten laulu</strong> Olen omena, olen omena, olen pyöreä omena!<br><br>"
    click3.style.backgroundColor = "white"; //laitoin  ylimääräiseksi tekstin taustan vaihtumaan valkoiseksi, jotta muutos näkyy selkeämmin testatessa
})

// Bonus: Miten vaihtaisit JavaScriptillä koko sivun taustavärin
let haha = document.querySelector("#paa"); //haettu osio paa-idllä (html:ssä headin id)
let voiei = document.querySelector("#keho"); //haettu osio keho-idllä (html:ssä bodyn id)
    
haha.addEventListener("click", function() { //lisätty kuuntelija, joka klikatessa
haha.style.backgroundColor="yellow"}) //vaihtaa värin

voiei.addEventListener("click", function() { //sama kuin yllä
voiei.style.backgroundColor="yellow"})
//^joo, ei oo hyvin nimetty

// Tehtävä 2

let uusijuttu = document.querySelector("#sisalto"); // etsitty id sisalto
uusijuttu.style.color = "red"; //vaihdettu väri punaiseksi
uusijuttu.style.fontFamily = "times new roman"; // fontti eri
uusijuttu.style.backgroundColor = "purple"; // taustaväri lila
uusijuttu.innerHTML = "<h3>Etusivun uutinen</h3>" //pyydetty otsikkomuoto ja teksti
uusijuttu.style.border = "1px solid black"

// kuvan asettaminen muotoilu

let kuva1 = document.createElement("img");
kuva1.src ="media/saukko.jpg"; //haetaan kuva media-kansiosta
kuva1.style.maxWidth = "10%";
uusijuttu.appendChild(kuva1); //lisätään kuva uusijuttu-kohtaan

// piilotetaan uusijuttu ja kuva painikkeen klikkauksella
let piiloonpainike = document.querySelector("#painike1");
piiloonpainike.addEventListener("click", function() {
    uusijuttu.style.display="none"
    kuva1.style.display="none"
})

// palautetaan uusijuttu ja kuva näkyville
let esiinpainike = document.querySelector("#painike2");
esiinpainike.addEventListener("click", function() {
    uusijuttu.style.display=""
    kuva1.style.display=""
})
