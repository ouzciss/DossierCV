// Toutes les données du CV dans un seul tableau d'objets
const cvDonnees = [
    // Profil
    { id: "profile-name", contenu: "Nom: Wade Prenom: Fallou" },
    { id: "profile-email", contenu: "Fallou@gmail.com" },
    { id: "profile-phone", contenu: "+221 77 123 45 67" },
    { id: "profile-address", contenu: "Dakar, Sénégal" },
    { id: "profile-image", contenu: "Image/mo.png", type: "image" },
    { id: "footer-email", contenu: "Fallouwade@gmail.com" },
    
    // Expérience professionnelle
    { id: "exp-1", contenu: "Développeur Full-Stack - Entreprise ABC (2022-2024)" },
    { id: "exp-2", contenu: "Stagiaire Développeur - StartUp XYZ (2021-2022)" },
    { id: "exp-3", contenu: "Assistant IT - Bureau Local (2020-2021)" },
    
    // Compétences techniques
    { id: "comp-1", contenu: "HTML/CSS/JavaScript - Niveau avancé" },
    { id: "comp-2", contenu: "PHP/MySQL - Niveau intermédiaire" },
    { id: "comp-3", contenu: "React.js/Node.js - Niveau avancé" },
    
    // Expérience bénévole
    { id: "ben-1", contenu: "Formation informatique - Association Locale (2023)" },
    { id: "ben-2", contenu: "Support technique - ONG Education (2022)" },
    { id: "ben-3", contenu: "Maintenance site web - Club Sportif (2021)" },
    
    // Loisirs
    { id: "loisir-1", contenu: "Programmation et développement personnel" },
    { id: "loisir-2", contenu: "Football et sports d'équipe" },
    { id: "loisir-3", contenu: "Lecture technologique et veille informatique" },
    
    // Contact
    { id: "contact-1", contenu: "LinkedIn: /in/fallou-wade" },
    { id: "contact-2", contenu: "GitHub: @fallouwade" },
    { id: "contact-3", contenu: "Portfolio: www.fallouwade.dev" }
];

// Charger toutes les données dans le HTML
function chargerDonnees() {
    cvDonnees.forEach(function(item) {
        const element = document.getElementById(item.id);
        if (element) {
            if (item.type === "image") {
                element.src = item.contenu;
            } else {
                element.textContent = item.contenu;
            }
        }
    });
}

// Mode sombre/clair
function changerTheme() {
    const body = document.body;
    const bouton = document.getElementById('theme-toggle');
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        bouton.innerHTML = '<i class="material-icons">dark_mode</i><span class="tooltip-text" id="tooltip-text">Mode sombre</span>';
    } else {
        body.classList.add('dark-mode');
        bouton.innerHTML = '<i class="material-icons">light_mode</i><span class="tooltip-text" id="tooltip-text">Mode clair</span>';
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    chargerDonnees();
    document.getElementById('theme-toggle').addEventListener('click', changerTheme);
});