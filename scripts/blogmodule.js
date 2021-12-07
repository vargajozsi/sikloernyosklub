export class CreateBlogInstance {
    constructor(cikkNev, cikkNum) {
        this.cikkNev = cikkNev;
        this.cikkNum = cikkNum;
    }

    addArticle() {

    const addArticle = document.createElement('article');
    const kontener = document.querySelector('.hirek-kontener');
    kontener.appendChild(addArticle);
    const addHirCimeDiv = document.createElement('div');
    const articleLast = document.querySelector('.hirek-kontener').lastChild;
    articleLast.appendChild(addHirCimeDiv).setAttribute('class' ,'hir-cime');
    const hirCimDiv = articleLast.querySelector('.hir-cime');
    const addHElement = document.createElement('h2');
    hirCimDiv.appendChild(addHElement);
    const addHCimFoto = document.createElement('img');
    hirCimDiv.appendChild(addHCimFoto).setAttribute('src', './media/kemrseLogo.png');
    document.querySelector("main > div > div > article:last-child > div > h2").textContent = this.cikkNev;
    
};


};
