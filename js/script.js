// Mensagem após clicar no botão "Enviar Mensagem"

const botao = document.querySelector("#btn-mensagem");
botao.addEventListener("click", function(){
    alert("Mensagem enviada com sucesso!")
})


/**
 * Menu mobile responsivo
 * Funciona em todas as páginas do portfólio
 */

const menuToggle = document.getElementById('menuToggle');
const mainMenu   = document.getElementById('mainMenu');

if (menuToggle && mainMenu) {

    menuToggle.addEventListener('click', () => {
        const aberto = mainMenu.classList.toggle('aberto');
        menuToggle.classList.toggle('aberto', aberto);
        menuToggle.setAttribute('aria-expanded', aberto);
    });

    // Fecha o menu ao clicar em qualquer link (para Single-Page feel)
    mainMenu.querySelectorAll('.link').forEach(link => {
        link.addEventListener('click', () => {
            mainMenu.classList.remove('aberto');
            menuToggle.classList.remove('aberto');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Fecha o menu ao redimensionar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mainMenu.classList.remove('aberto');
            menuToggle.classList.remove('aberto');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}
