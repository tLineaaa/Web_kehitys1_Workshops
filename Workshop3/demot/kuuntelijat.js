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

// Etsi kenttä sivulta
let kentta = document.querySelector("input");
// Lisää kuuntelija
kentta.addEventListener("focus", function () {
  alert("Aktivoit kentän");
});
