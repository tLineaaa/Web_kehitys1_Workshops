//HARJOITUS 1

// Etsi eka nappi
let ekaNappi = document.querySelector("#ekaNappi");
// Lisää nappiin kuuntelija
ekaNappi.addEventListener("click", function () {
  alert("Klikkasit minua!");
});


function showTable() {
  //muuttujat
  const nimi = "Jaana";
  const tehtava = "koodaaja";

  //taulukko template stringillä
  const html =`
    <table border="1">
      <thead>
        <tr><th>Nimi</th><th>Tehtävä</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>${nimi}</td>
          <td>${tehtava}</td>
        </tr>
      </tbody>
    </table>
  `;
  // taulukko oikeaan kohtaan
  document.querySelector("#taulukonPaikka").innerHTML = html;
}

// Etsi toka nappi
let tokaNappi = document.querySelector("#tokaNappi");
// Lisää nappiin kuuntelija
tokaNappi.addEventListener("click", function() { showTable();
});

// HARJOITUS 2

// Etsi toka otsikko
let tokaOtsikko = document.querySelector("#tokaOtsikko");
// Lisää otsikkoon kuuntelija ja mouseover alert
tokaOtsikko.addEventListener("mouseover", function () {
  alert("Stepped over me with a mouse!");
});

// Etsi eka otsikko
let ekaOtsikko = document.querySelector("#ekaOtsikko");
// Lisää otsikkoon kuuntelija ja klikkaus alert
ekaOtsikko.addEventListener("click", function () {
  alert("Bye bye mouse!");
// Lisää värin muutos otsikkoon
ekaOtsikko.style.color = "red";
});


// HARJOITUS 3

let paikka = document.querySelector("#status");
let tekstikentta = document.querySelector("textarea");
let lomake = document.querySelector("#feedbackForm");
let merkkimaara = document.querySelector("#charcount");
const maxpituus = 200; //maksimipituus

//lisätään kuuntelija focus, kun tekstikenttä aktivoituu, näkyville tulee teksti ja väri vaihtuu
tekstikentta.addEventListener("focus", function () {
  paikka.textContent = "Aktivoit kentän";
  paikka.style.backgroundColor = "lightgreen";
})

// sama kuin yllä, mutta nyt blur, kun tekstikentästä lähdetään ja näkyville tyhjää, väri pois
tekstikentta.addEventListener("blur", function() {
  paikka.textContent = "";
  tekstikentta.style.backgroundColor = "white";
});

// merkkimäärän tarkistus
tekstikentta.addEventListener("input", function(){
  let nytpituus = tekstikentta.value.length; //tsekkaa pituus
  charcount.textContent = `${nytpituus}/${maxpituus}`; //näytä pituus / max pituus

//jos merkkimäärä ylittyy DEAKTIVOINTI UUPUU
  if (nytpituus > maxpituus) {
    tekstikentta.style.backgroundColor = "red"; //tekstikentän väri muuttuu punaiseksi
    merkkimaara.style.color = "red"; // merkkimäärä muuttuu punaiseksi
  }
})

// keydown

// submit-kuuntelija
lomake.addEventListener("submit", function(esto) { 
  esto.preventDefault(); //esto oikealle lähetykselle
  if (tekstikentta.value === "") { //jos tekstikenttä on tyhjä, hälytä
    alert("Et voi lähettää tyhjää palautetta");
    return
  }
  alert("Palaute tallennettu"); //muutoin näytä tämä viesti (pop-up)
  tekstikentta.value = ""; // tyhjennä tekstikenttä
})