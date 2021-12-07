export class CreateBlogInstance {
  constructor(cikkNev, szoveg, cikkNum, cikkCimkep, cikkBentiKep) {
    this.cikkNev = cikkNev;
    this.cikkNum = cikkNum;
    this.szoveg = szoveg;
    this.cikkCimkep = cikkCimkep;
    this.cikkBentiKep = cikkBentiKep;
  }

  addArticle() {
    const kontenerLastChild =
      document.getElementsByClassName("hirek-kontener")[0];
    kontenerLastChild.appendChild(document.createElement("article"));
    const aricleI = kontenerLastChild.children;
    console.log(aricleI[this.cikkNum]);
    aricleI[this.cikkNum].innerHTML =
      `<div class='hir-cime'><h2 id='hirCime'>${this.cikkNev}</h2><img src='${this.cikkCimkep}'></div>  <div class='hir-tartalom'><p class='szovegeles'>${this.szoveg}</p><img class='cikkBentiKep' src='${this.cikkBentiKep}'></div><div class='hir-hashtag'></div>`;

    // const hirCime = document.getElementById('hirCime');
    // hirCime.textContent = this.cikkNev;
  }
}
