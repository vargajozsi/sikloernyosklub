import { clubs } from "./clubs.js";
//main hamburger menu hide begin//
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  this.classList.toggle("close");
});
//main hamburger menu hide end//

class clubFill {
  constructor(klubnev, email, gps, tel, website, Klubvezeto) {
    
  }
}

const findClubWrapper = document.querySelector(".wrapper-klubs");
findClubWrapper.appendChild(document.createElement('div')).innerText = 'goal';