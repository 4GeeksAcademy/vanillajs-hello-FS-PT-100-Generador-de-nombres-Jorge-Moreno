import "bootstrap";
import "./style.css";



import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here


  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extensions = ['.com', '.net', '.us', '.es'];

  let domains = []; // Aquí vamos a guardar todos los dominios posibles

  // Generar todas las combinaciones y guardarlas en el array
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          domains.push(`${p}${a}${n}${ext}`);
        }
      }
    }
  }

  let domainList = document.getElementById('domainList');
  let generateBtn = document.getElementById('generateBtn');

  let currentIndex = 0;

  // Cuando el usuario hace click en el botón
  generateBtn.addEventListener('click', function () {
    if (currentIndex < domains.length) {
      let listItem = document.createElement('li');
      listItem.textContent = domains[currentIndex];
      domainList.appendChild(listItem);
      currentIndex++;
    } else {
      alert('¡Ya no hay más dominios para mostrar!');
    }
  });

};
