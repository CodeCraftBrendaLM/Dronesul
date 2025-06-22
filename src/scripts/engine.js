

document.addEventListener('DOMContentLoaded', () => {
    console.log('Site DroneSul carregado!');

    // Exemplo de como você poderia adicionar um evento de clique no futuro, se necessário.
    // const saibaMaisButtons = document.querySelectorAll('.btn-saiba-mais');
    // saibaMaisButtons.forEach(button => {
    //     button.addEventListener('click', (event) => {
    //         // event.preventDefault(); // Descomente se quiser evitar o comportamento padrão do link
    //         console.log('Botão Saiba Mais clicado!');
    //         // Adicione aqui a lógica para navegar para a página correta se não estiver usando links diretos
    //     });
    // });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenuContainer = document.querySelector('.menu-mobile-container');
    const menuLinks = document.querySelectorAll('.menu-mobile-container .menu a'); // Todos os links do menu

    if (hamburger && mobileMenuContainer) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('is-active'); // Adiciona/remove classe para animação do hambúrguer
            mobileMenuContainer.classList.toggle('is-active'); // Adiciona/remove classe para mostrar/esconder o menu
        });

        // Fechar o menu ao clicar em um link (para navegação suave)
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Fechar o menu e resetar o hambúrguer
                hamburger.classList.remove('is-active');
                mobileMenuContainer.classList.remove('is-active');
            });
        });
    }
});