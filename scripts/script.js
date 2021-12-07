import { CreateBlogInstance } from "./blogmodule.js";
//main hamburger menu hide begin//
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  this.classList.toggle("close");
});
//main hamburger menu hide end//

//Cikkek feltoltése funkció start//
let cikkAdatok = {
  nulladikCikk: {
    cikkNum: 0,
    cikkNev: "DHV Figyelem! Biztonsági felülvizsgálat mentőernyőkre",
    cikkCimKep: "./media/cikkek/DHV/dhv_logo.jpg",
    szoveg:
      "A DHV Német Függőrepülő Szövetség biztonsági felülvizsgálatot rendelt el minden mentőrendszerhez, mivel néhány alkalommal dokumentáltan történtek súlyos, akár halálos kimenetelű balesetek mentőernyő használata ellenére az elmúlt években. A DHV szigorú vizsgálatok során megállapította, hogy egynél több esetben az egyébként kifogástalan állapotban lévő mentőernyő helytelen működését a következő tényezők okozták: A mentőernyő és a beülő inkompatibilitása a beülő belső vagy külső konténerével A mentőernyő frontkonténerének helytelen felszerelése. Nyitási folyamat meghiúsulása egyéb akadályoztatottság következtében. A hatóság által kijelölt személyek kötelesek írásban dokumentálni az ellenőrzést és az esetleges észrevételeket eljuttatni a DHV-hez. Az ellenőrzés az alábbiakat kell hogy magában foglalja: 1. Meghatározni a használati utasításban található információk alapján, hogy a heveder és a mentőeszköz alapvetően kompatibilisek-e. A mentőeszköz belső konténerrel ellátott beülőnél határozza meg, hogy a kombinálandó mentőfelszerelést a beülő gyártója jóváhagyta-e? A telepítéshez birtokolja-e a szóban forgó beülőhöz tartozó belső konténert. 2. A belső konténeres mentőeszköz beszerelése a beülő külső konténerébe vagy külső külső konténerbe a használati utasítás szerinti. 3. Kioldási teszt a heveder és a mentőeszköz leendő felhasználója által. Az aktiválási próbát hevederfelfüggesztésben szimulátorban kell végrehajtani a hevederben, repülési helyzetben. A belső konténert teljesen ki kell szabadítani a beülőből és ki kell dobni. Az aktiválási teszt során meg kell állapítani, hogy a az aktiváló fogantyú könnyen elérhető és könnyen megfogható, b a belső konténer kihúzható és eldobható-e a beülő tárolójából vagy a külső mentőernyőkonténerből a mentőszerkezet kihúzási irányában. A pilóta ezt könnyen és kis erőfeszítéssel tudja megtenni. c a kioldó fogantyú, a zsinór és a belső konténer konfigurációja lehetővé teszi a belső konténer egy menetben történő erőteljes kidobását. d A kioldó fogantyú típusa és a belső konténerrel való kapcsolat hossza végett nem áll fenn annak a veszélye, hogy a mentőeszköz kioldódjon a belső konténerből, például lelógjon vagy belegabalyodjon a tartalék ejtőernyő vezetékeibe.",
      cikkBelsoKep: './media/cikkek/charlyVisszahivas/charlyRettungsschirm.webp'
  },
};

let elso = new Promise((resolve, rejected) => {
  const firstArticle = new CreateBlogInstance(
    cikkAdatok.nulladikCikk.cikkNev,
    cikkAdatok.nulladikCikk.szoveg,
    0,
    cikkAdatok.nulladikCikk.cikkCimKep,
    cikkAdatok.nulladikCikk.cikkBelsoKep
  );
  firstArticle.addArticle();
});

let masodik = new Promise((resolve, rejected) => {
  const secArticle = new CreateBlogInstance(
    cikkAdatok.nulladikCikk.cikkNev,
    cikkAdatok.nulladikCikk.szoveg,
    1,
    cikkAdatok.nulladikCikk.cikkCimKep,
    cikkAdatok.nulladikCikk.cikkBelsoKep
  );
  secArticle.addArticle();
});

let harmadik = new Promise((resolve, rejected) => {
  const treeArticle = new CreateBlogInstance(
    cikkAdatok.nulladikCikk.cikkNev,
    cikkAdatok.nulladikCikk.szoveg,
    2,
    cikkAdatok.nulladikCikk.cikkCimKep,
    cikkAdatok.nulladikCikk.cikkBelsoKep
  );
  treeArticle.addArticle();
});

async function cikkBetoltes() {
  try {
    let elsoValasz = await elso();
    let masodikValasz = await masodik();
    let harmadikValasz = await harmadik();
  } catch (err) {
    console.log(err + "elszartad");
  }
}
//Cikkek feltoltése funkció vége//
