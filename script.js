// Conteúdo para script.js

// Espera o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA NAVEGAÇÃO ENTRE PÁGINAS ---
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPageId = button.dataset.page; // Pega o valor de "data-page" (ex: "dashboard")
            const targetPage = document.getElementById(`page-${targetPageId}`); // Encontra o elemento (ex: #page-dashboard)

            // 1. Remove "active" de todos os botões
            navButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Adiciona "active" apenas no botão clicado
            button.classList.add('active');

            // 3. Esconde todas as páginas
            pages.forEach(page => page.classList.add('hidden'));
            // 4. Mostra apenas a página alvo
            if (targetPage) {
                targetPage.classList.remove('hidden');
            }
        });
    });

    // --- LÓGICA PARA AS ABAS (TABS) NA PÁGINA DE MOVIMENTAÇÕES ---
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetTabId = trigger.dataset.tab; // Pega o valor de "data-tab" (ex: "all")
            const targetContent = document.getElementById(`tab-${targetTabId}`); // Encontra o elemento (ex: #tab-all)

            // 1. Remove "active" de todas as abas (botões)
            tabTriggers.forEach(t => t.classList.remove('active'));
            // 2. Adiciona "active" na aba clicada
            trigger.classList.add('active');

            // 3. Esconde todos os conteúdos de aba
            tabContents.forEach(content => content.classList.remove('active'));
            // 4. Mostra apenas o conteúdo da aba alvo
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

});
