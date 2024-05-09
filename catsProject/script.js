// Sélectionne l'élément du bouton de basculement de thème à l'aide de son ID
const themeToggle = document.getElementById('theme-toggle');
// Sélectionne l'élément body du document
const body = document.body;

// Ajoute un écouteur d'événements pour le clic sur le bouton de basculement de thème
themeToggle.addEventListener('click', () => {
    // Bascule la classe 'dark-mode' sur l'élément body, permettant de passer entre les modes clair et sombre
    body.classList.toggle('dark-mode');
});