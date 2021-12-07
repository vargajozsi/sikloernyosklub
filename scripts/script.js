import { CreateBlogInstance } from "./blogmodule.js";
//main hamburger menu hide begin//
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  this.classList.toggle("close");
});
//main hamburger menu hide end//

const firstArticle = new CreateBlogInstance("elsoCikk", 5);
firstArticle.addArticle();

const secArticle = new CreateBlogInstance("masodikCikk", 6);
secArticle.addArticle();
