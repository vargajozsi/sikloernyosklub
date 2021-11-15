import { clubs } from "./clubs.js";
//main hamburger menu hide begin//
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  this.classList.toggle("close");
});
//main hamburger menu hide end//

class clubFill {
  constructor(clubExamplar) {
    this.clubExamplar = clubExamplar;
  }
  putKlubnev() {
    let findClubWrapper = document.querySelector(".wrapper-klubs");
  }
}

const klubCheck = new clubFill();
klubCheck.putKlubnev();
