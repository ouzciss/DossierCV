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
    const body = document.getElementById('body-fallou'); // Utiliser l'ID du body spécifique à Fallou
    const bouton = document.getElementById('theme-toggle-fallou'); // Utiliser l'ID du bouton spécifique à Fallou
    
    if (body.classList.contains('dark-mode1')) {
        body.classList.remove('dark-mode1');
        bouton.innerHTML = '<i class="material-icons">dark_mode</i><span class="tooltip-text" id="tooltip-text">Mode sombre</span>';
    } else {
        body.classList.add('dark-mode1');
        bouton.innerHTML = '<i class="material-icons">light_mode</i><span class="tooltip-text" id="tooltip-text">Mode clair</span>';
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    chargerDonnees();
    document.getElementById('theme-toggle-fallou').addEventListener('click', changerTheme);
});

const profilesData = {
    'ousmane_ciss': {
        name: 'Ousmane Ciss',
        address: 'Tivaoune Peulh / Rufisque',
        phone: '+221 777953707',
        email: 'paousmaneciss12@gmail.com',
        image: 'ouzi.jfif',
        // AJOUT DE LA DATE DE NAISSANCE DANS LES DONNÉES
        birthDate: '04/09/1998', 
        profile: 'Étudiant en génie logiciel et développement web avec une passion pour la création de solutions innovantes et l\'apprentissage continu.',
        competences_techniques: [
            'Informatique Bureautique : Maîtrise de Microsoft Office (Word, Excel, PowerPoint)',
            'Développement Web/Mobile : HTML, CSS, JavaScript (notions)',
            'CMS et Frameworks : WordPress, Ionic',
            'Techniques professionnelles : Collecte de données, outils de recensement'
        ],
        competences_fonctionnelles: [
            'Supervision et gestion : Management d\'équipe',
            'Formation et accompagnement : Encadrement terrain',
            'Relations interpersonnelles : Communication, résolution de conflits, travail en équipe, adaptabilité'
        ],
        experiences: [
            '2020-2022 : Relais communautaire - Centre de Santé de Keur Massar',
            '2021 : Agent d\'Appoint à la CICES (Foire Internationale de Dakar)',
            '2023 : Agent recenseur (ANDS - RGH5)',
            '2023 : Superviseur BDA - Enquête compteurs d\'eau pour SenEau'
        ],
        formations: [
            '2019-2023 : Licence 3 en Informatique - Dév. Web/Mobile (Université Numérique Cheikh Hamidou Kane)',
            '2025 : Certificat en Électricité Bâtiment',
            '2023 : Attestation en Informatique Bureautique (CRE de Guédiawaye)'
        ],
        langues: [
            'Français : Lire et Écrire',
            'Anglais : Intermédiaire',
            'Wolof : Courant'
        ],
    },
    
    'serge_senghor': {
        name: 'Serge Senghor',
        address: 'Dakar, Sénégal',
        jobTitle: 'Développeur Web Full-Stack',
        phone: '+221 77 111 22 33',
        email: 'serge.senghor@email.com',
        linkedin: 'linkedin.com/in/serge-senghor',
        github: 'github.com/serge-dev',
        profile: 'Passionné par le développement web, je maîtrise à la fois le front-end et le back-end. Mon objectif est de créer des solutions web performantes et intuitives.',
        image: 'uc.jpg',
        competences: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Django', 'SQL'],
        etudes: {
            'Master en ': 'INFORMATIQUE.'
        },
        langues: {
            'Français': 'Natif',
            'Anglais': 'Courant',
            'Espagnol': 'Débutant'
        },
        loisirs: ['Lecture', 'Voyages', 'Randonnée']
    },
    'ibrahima_diouf': {
        name: 'Ibrahima Sy',
        jobTitle: 'developpeur full stack',
        location: 'Dakar, Sénégal',
        phone: '+221 77 444 55 66',
        email: 'ibrahima.sy@email.com',
        linkedin: 'linkedin.com/in/ibrahima-sy',
        github: 'github.com/ibrahima-ia',
        profile: 'Développeur full stack',
        image: 'image.png',
        competences: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Data Analysis'],
        etudes: {
            '- École ': 'Projet de recherche sur les réseaux de neurones pour la reconnaissance d\'images.'
        },
        langues: {
            'Français': 'Natif',
            'Anglais': 'Avancé'
        },
        loisirs: ['Échecs', 'Musique', 'Codage créatif']
    }
};

function injectData(profileId) {
    const profile = profilesData[profileId];
    if (!profile) {
        console.error(`Profil non trouvé pour l'ID : ${profileId}`);
        return;
    }

    
    const imageElement = document.getElementById(`profile-photo-${profileId}`);
    if (imageElement) imageElement.src = `Image/${profile.image}`;
    
    
    if (profileId === 'ousmane_ciss') {
        
        const nomElement = document.getElementById('nom-ousmane');
        if (nomElement) nomElement.textContent = profile.name.split(' ')[1];
        
        const prenomElement = document.getElementById('prenom-ousmane');
        if (prenomElement) prenomElement.textContent = profile.name.split(' ')[0];

        // AJOUT DE LA LIGNE POUR LA DATE DE NAISSANCE
        const dateNaissanceElement = document.getElementById('date-naissance-ousmane');
        if (dateNaissanceElement) dateNaissanceElement.textContent = profile.birthDate;

        const adresseElement = document.getElementById('adresse-ousmane');
        if (adresseElement) adresseElement.textContent = profile.address;

        const phoneElement = document.getElementById('phone-ousmane');
        if (phoneElement) phoneElement.textContent = profile.phone;

        const emailElement = document.getElementById('email-ousmane');
        if (emailElement) {
            emailElement.href = `mailto:${profile.email}`;
            emailElement.textContent = profile.email;
        }

        const footerPhone = document.getElementById('footer-phone-ousmane');
        if (footerPhone) footerPhone.textContent = profile.phone;

        const footerEmail = document.getElementById('footer-email-ousmane');
        if (footerEmail) {
            footerEmail.href = `mailto:${profile.email}`;
            footerEmail.textContent = profile.email;
        }

        // Injection des expériences
        const experiencesList = document.getElementById('experiences-list-ousmane');
        if (experiencesList) {
            experiencesList.innerHTML = '';
            profile.experiences.forEach(exp => {
                const li = document.createElement('li');
                li.textContent = exp;
                experiencesList.appendChild(li);
            });
        }

        // Injection des compétences techniques
        const competencesTechList = document.getElementById('competences-tech-list-ousmane');
        if (competencesTechList) {
            competencesTechList.innerHTML = '';
            profile.competences_techniques.forEach(comp => {
                const parts = comp.split(':');
                const title = parts[0];
                const desc = parts.length > 1 ? parts.slice(1).join(':') : null;

                const dt = document.createElement('dt');
                dt.textContent = title.trim();
                competencesTechList.appendChild(dt);

                if (desc) {
                    const dd = document.createElement('dd');
                    dd.textContent = desc.trim();
                    competencesTechList.appendChild(dd);
                }
            });
        }

        // Injection des compétences fonctionnelles
        const competencesFonctList = document.getElementById('competences-fonct-list-ousmane');
        if (competencesFonctList) {
            competencesFonctList.innerHTML = '';
            profile.competences_fonctionnelles.forEach(comp => {
                const parts = comp.split(':');
                const title = parts[0];
                const desc = parts.length > 1 ? parts.slice(1).join(':') : null;

                const dt = document.createElement('dt');
                dt.textContent = title.trim();
                competencesFonctList.appendChild(dt);

                if (desc) {
                    const dd = document.createElement('dd');
                    dd.textContent = desc.trim();
                    competencesFonctList.appendChild(dd);
                }
            });
        }

        // Injection des formations
        const formationsList = document.getElementById('formations-list-ousmane');
        if (formationsList) {
            formationsList.innerHTML = '';
            profile.formations.forEach(form => {
                const li = document.createElement('li');
                li.textContent = form;
                formationsList.appendChild(li);
            });
        }

        // Injection des langues
        const languesList = document.getElementById('langues-list-ousmane');
        if (languesList) {
            languesList.innerHTML = '';
            profile.langues.forEach(lang => {
                const li = document.createElement('li');
                li.textContent = lang;
                languesList.appendChild(li);
            });
        }
    }
    
    // Logique d'injection pour Fallou
 
    
    // Logique d'injection pour Serge
    if (profileId === 'serge_senghor') {
        const nomElement = document.getElementById('nom-serge');
        if (nomElement) nomElement.textContent = profile.name.split(' ')[1];
        
        const prenomElement = document.getElementById('prenom-serge');
        if (prenomElement) prenomElement.textContent = profile.name.split(' ')[0];

        const adresseElement = document.getElementById('adresse-serge');
        if (adresseElement) adresseElement.textContent = profile.address;
        
        const phoneElement = document.getElementById('phone-serge');
        if (phoneElement) phoneElement.textContent = profile.phone;
        
        const emailElement = document.getElementById('email-serge');
        if (emailElement) {
            emailElement.textContent = profile.email;
            emailElement.href = `mailto:${profile.email}`;
        }
        
        const footerPhone = document.getElementById('footer-phone-serge');
        if (footerPhone) footerPhone.textContent = profile.phone;
        
        const footerEmail = document.getElementById('footer-email-serge');
        if (footerEmail) footerEmail.textContent = profile.email;

        // Injection des compétences
        const competencesList = document.getElementById('competences-list-serge');
        if (competencesList) {
            competencesList.innerHTML = '';
            profile.competences.forEach(comp => {
                const li = document.createElement('li');
                li.textContent = comp;
                competencesList.appendChild(li);
            });
        }

        // Injection des études
        const etudesList = document.getElementById('etudes-list-serge');
        if (etudesList) {
            etudesList.innerHTML = '';
            for (const [key, value] of Object.entries(profile.etudes)) {
                const li = document.createElement('li');
                li.innerHTML = `<b>${key}</b><br>${value}`;
                etudesList.appendChild(li);
            }
        }

        // Injection des langues
        const languesList = document.getElementById('langues-list-serge');
        if (languesList) {
            languesList.innerHTML = '';
            for (const [lang, level] of Object.entries(profile.langues)) {
                const li = document.createElement('li');
                li.textContent = `${lang} : ${level}`;
                languesList.appendChild(li);
            }
        }

        // Injection des loisirs
        const loisirsList = document.getElementById('loisirs-list-serge');
        if (loisirsList) {
            loisirsList.innerHTML = '';
            profile.loisirs.forEach(loisir => {
                const li = document.createElement('li');
                li.textContent = loisir;
                loisirsList.appendChild(li);
            });
        }
    }
    
    // Logique d'injection pour Ibrahima
    if (profileId === 'ibrahima_diouf') {
        const nameElement = document.getElementById('name-ibrahima');
        if (nameElement) nameElement.textContent = profile.name;

        const jobTitle = document.getElementById('job-title-ibrahima');
        if (jobTitle) jobTitle.textContent = profile.jobTitle;

        const locationElement = document.getElementById('location-ibrahima');
        if (locationElement) locationElement.textContent = profile.location;

        const phone = document.getElementById('phone-ibrahima');
        if (phone) phone.textContent = profile.phone;

        const email = document.getElementById('email-ibrahima');
        if (email) email.textContent = profile.email;
        
        const profileText = document.getElementById('profile-text-ibrahima');
        if (profileText) profileText.textContent = profile.profile;

        const footerPhone = document.getElementById('footer-phone-ibrahima');
        if (footerPhone) footerPhone.textContent = profile.phone;

        const footerEmail = document.getElementById('footer-email-ibrahima');
        if (footerEmail) footerEmail.textContent = profile.email;
        
        // Injection des compétences
        const competencesList = document.getElementById('competences-list-ibrahima');
        if (competencesList) {
            competencesList.innerHTML = '';
            profile.competences.forEach(comp => {
                const li = document.createElement('li');
                li.textContent = comp;
                competencesList.appendChild(li);
            });
        }

        // Injection des études
        const etudesList = document.getElementById('etudes-list-ibrahima');
        if (etudesList) {
            etudesList.innerHTML = '';
            for (const [key, value] of Object.entries(profile.etudes)) {
                const li = document.createElement('li');
                li.innerHTML = `<b>${key}</b><br>${value}`;
                etudesList.appendChild(li);
            }
        }

        // Injection des langues
        const languesList = document.getElementById('langues-list-ibrahima');
        if (languesList) {
            languesList.innerHTML = '';
            for (const [lang, level] of Object.entries(profile.langues)) {
                const li = document.createElement('li');
                li.textContent = `${lang} : ${level}`;
                languesList.appendChild(li);
            }
        }

        // Injection des loisirs
        const loisirsList = document.getElementById('loisirs-list-ibrahima');
        if (loisirsList) {
            loisirsList.innerHTML = '';
            profile.loisirs.forEach(loisir => {
                const li = document.createElement('li');
                li.textContent = loisir;
                loisirsList.appendChild(li);
            });
        }
    }
}

const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;

if (toggleButton) {
    const sunIcon = toggleButton.querySelector('.fa-sun');
    const moonIcon = toggleButton.querySelector('.fa-moon');
    let themeState = 0; 

    toggleButton.setAttribute('title', 'Changer de thème');

    toggleButton.addEventListener('click', () => {
        themeState = (themeState + 1) % 3;

        body.classList.remove('dark-mode', 'all-white-mode');
        
        if (themeState === 1) {
            body.classList.add('dark-mode');
        } else if (themeState === 2) {
            body.classList.add('all-white-mode');
        }

        // Gestion de l'affichage des icônes
        if (body.classList.contains('dark-mode')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        } else {
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        }
    });
}

// --- Logique d'initialisation ---
document.addEventListener('DOMContentLoaded', () => {
    const profileId = document.body.id; 
    if (profileId) {
        injectData(profileId);
    }
});
