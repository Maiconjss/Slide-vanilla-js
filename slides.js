function setimg() {

}
window.addEventListener("load", setimg, false);


let settings = {
    primeiraImg: function () {
        elemento = document.querySelector('#slider a:first-child');
        elemento.classList.add("ativo");
        this.legenda(elemento);
    },

    legenda: function (obj) {
        let legenda = obj.querySelector("img").getAttribute("alt");
        document.querySelector("figcaption").innerHTML = legenda;
    },

    slide: function () {
        elemento = document.querySelector(".ativo");
        if (elemento.nextElementSibling) {
            elemento.nextElementSibling.classList.add("ativo");
            settings.legenda(elemento.nextElementSibling);
            elemento.classList.remove("ativo");
        } else {
            elemento.classList.remove("ativo");
            settings.primeiraImg();
        }
    },

    proximo: function () {
        clearInterval(intervalo);
        elemento = document.querySelector(".ativo");

        if (elemento.nextElementSibling) {
            elemento.nextElementSibling.classList.add("ativo");
            settings.legenda(elemento.nextElementSibling);
            elemento.classList.remove("ativo");
        } else {
            elemento.classList.remove("ativo");
            settings.primeiraImg();
        }
        intervalo = setInterval(settings.slide, 4000);
    },

    anterior: function () {
        clearInterval(intervalo);
        elemento = document.querySelector(".ativo");

        if (elemento.previousElementSibling) {
            elemento.previousElementSibling.classList.add("ativo");
            settings.legenda(elemento.previousElementSibling);
            elemento.classList.remove("ativo");
        } else {
            elemento.classList.remove("ativo");
            elemento = document.querySelector("a:last-child");
            elemento.classList.add("ativo");
            this.legenda(elemento);
        }
        intervalo = setInterval(settings.slide, 4000);
    },

}

//slide

settings.primeiraImg();

// legenda 

settings.legenda(elemento);

// slide && tempo

let intervalo = setInterval(settings.slide, 4000);


document.querySelector(".next").addEventListener("click", settings.proximo, false);
document.querySelector(".prev").addEventListener("click", settings.anterior, false);

window.addEventListener("load", setimg, false);