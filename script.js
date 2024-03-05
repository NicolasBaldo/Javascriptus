// Execice 1 : 

let clicCounter = 0; 


const footer = document.querySelector('footer');


footer.addEventListener('click', function() {
    clicCounter++; 
    console.log('clic numéro ' + clicCounter); 
});


// Exercice 2 : 


const hamburgerButton = document.querySelector('.navbar-toggler');


const navbarHeader = document.getElementById('navbarHeader');


hamburgerButton.addEventListener('click', function() {
    navbarHeader.classList.toggle('collapse');
});



// Exercice 3 : 


const editButton = document.querySelectorAll('.btn-outline-secondary')[1];


const secondCardText = document.querySelectorAll('.card-text')[1];


editButton.addEventListener('click', function() {
    
    if (secondCardText.style.color === 'green') {
      
        secondCardText.style.color = '';
    } else {
        
        secondCardText.style.color = 'green';
    }
});


// Exercice 4 : 


// Sélectionne la navbar
const navbar = document.querySelector('.navbar');

// Ajoute un compteur pour suivre les clics
let clickCount = 0;

// Ajoute un écouteur d'événements sur le double clic de la navbar
navbar.addEventListener('dblclick', function() {
    clickCount++; // Incrémente le compteur de clics

    // Si c'est le premier double-clic, désactive le lien vers le fichier CSS de Bootstrap
    if (clickCount === 1) {
        document.querySelectorAll('link[rel="stylesheet"]').forEach(function(link) {
            if (link.href.includes('bootstrap')) {
                link.disabled = true; // Désactive le lien vers le fichier CSS de Bootstrap
            }
        });
    } else if (clickCount === 2) {
        // Si c'est le deuxième double-clic, réactive le lien vers le fichier CSS de Bootstrap
        document.querySelectorAll('link[rel="stylesheet"]').forEach(function(link) {
            if (link.href.includes('bootstrap')) {
                link.disabled = false; // Réactive le lien vers le fichier CSS de Bootstrap
            }
        });
        clickCount = 0; // Réinitialise le compteur de clics
    }
});



// Exercice 5 : 





// Exercice 6 : 


// Sélectionne tous les boutons "View" des cards
const viewButtons = document.querySelectorAll('.btn-group .btn-success');

// Ajoute un écouteur d'événements à chaque bouton "View"
viewButtons.forEach(function(button) {
    button.addEventListener('mouseenter', function(event) {
        const card = event.target.closest('.card'); // Sélectionne la card parente du bouton survolé
        const cardImage = card.querySelector('.card-img-top'); // Sélectionne l'image de la card
        const cardText = card.querySelector('.card-text'); // Sélectionne le texte de la card

        // Réduit la taille de l'image à 20%
        cardImage.style.width = '20%';

        // Cache le texte de la card
        cardText.style.display = 'none';
    });

    // Ajoute un écouteur d'événements lorsque la souris quitte le bouton "View"
    button.addEventListener('mouseover', function(event) {
        const card = event.target.closest('.card'); // Sélectionne la card parente du bouton survolé
        const cardImage = card.querySelector('.card-img-top'); // Sélectionne l'image de la card
        const cardText = card.querySelector('.card-text'); // Sélectionne le texte de la card

        // Rétablit la taille normale de l'image
        cardImage.style.width = '';

        // Affiche à nouveau le texte de la card
        cardText.style.display = '';
    });
});


// Exercice 7 : 


// Sélectionne le bouton gris ==>
const nextButton = document.querySelector('.btn-secondary');

// Ajoute un écouteur d'événements sur le clic du bouton
nextButton.addEventListener('click', function() {
    let cardsContainer = document.getElementsByClassName('row')[1]; // Sélectionne le conteneur des cards
    let lastCard = cardsContainer.lastElementChild; // Sélectionne la dernière card
        console.log(lastCard)
    // Déplace la dernière card en premier
    cardsContainer.insertBefore(lastCard, cardsContainer.firstElementChild);

});


// Exercice 8 : 


const previousButton = document.querySelector('main section div p a');

// Ajoute un écouteur d'événements sur le clic du bouton
previousButton.addEventListener('click', function(e) {
    e.preventDefault();
    let cardsContainer = document.getElementsByClassName('row')[1]; // Sélectionne le conteneur des cards
    let firstcard = cardsContainer.firstElementChild; // Sélectionne la dernière card
  
    // Déplace la dernière card en premier
    cardsContainer.insertBefore(firstcard, cardsContainer.lastElementChild);

});


// Exercice 9 : 


// Sélectionne le logo de la page (JS & Events)
const logo = document.querySelector('.navbar-brand');

// Ajoute un écouteur d'événements sur le logo pour détecter les frappes de touches
logo.addEventListener('keypress', function(event) {
    const body = document.querySelector('body'); // Sélectionne le corps de la page

    // Supprime toutes les classes du corps de la page
    body.classList.remove('col-4', 'offset-md-4', 'offset-md-8');

    // Vérifie quelle touche a été pressée
    switch (event.key) {
        case 'a':
            // Condense la page sur 4 colonnes Bootstrap à gauche
            body.classList.add('col-4');
            break;
        case 'y':
            // Condense la page sur 4 colonnes Bootstrap au milieu
            body.classList.add('col-4', 'offset-md-4');
            break;
        case 'p':
            // Condense la page sur 4 colonnes Bootstrap à droite
            body.classList.add('col-4', 'offset-md-8');
            break;
        case 'b':
            // Remet la page à son état normal
            break;
        default:
            break;
    }
});
