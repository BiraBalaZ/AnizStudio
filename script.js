// Seleciona o botão
var backToTopBtn = document.getElementById("backToTopBtn");
backToTopBtn.style.display = "none";

// Mostra o botão quando o usuário rolar 20px para baixo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Quando o usuário clicar no botão, ele rola para o topo da página
backToTopBtn.onclick = function() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para navegadores Chrome, Firefox, IE e Opera
};
