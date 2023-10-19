// array con le immagini e i dettagli
const images = [
	{
		path: './img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
	},
	{
		path: './img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
	},
	{
		path: './img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.'
	},
	{
		path: './img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
	},
	{
		path: './img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
	},
];

const carouselDomElement = document.getElementById('carousel');

// devo recuperare tutti i dettagli dagli oggetti e scinderli
images.forEach((image) => {
  
  const imgPath = image.path;
  const imgTitle = image.title;
  const imgDescription = image.text;

  imgElement(imgPath, imgTitle, imgDescription);
})

//elementi dal DOM
const arrowLeftDomElement = carouselDomElement.querySelector('.arrow-left');
const arrowRightDomElement = carouselDomElement.querySelector('.arrow-right');

const thumbnailsDomElements = document.querySelectorAll('.thumbnail');

//creo un indice per selezionare le immagini 
let imgIndex = 0;
let imgMaxIndex = images.length - 1;

//recupero gli elementi generati dal DOM
const carouselImages = document.querySelectorAll('.carousel-img');

carouselImages[imgIndex].classList.add('show');
thumbnailsDomElements[imgIndex].classList.add('active');

// gestisco gli eventListeners sulle arrow
setInterval(() => {
  carouselImages[imgIndex].classList.remove('show');
  thumbnailsDomElements[imgIndex].classList.remove('active');
  if (imgIndex === imgMaxIndex) {
    imgIndex = 0;
  } else {
    ++imgIndex;
  }
  carouselImages[imgIndex].classList.add('show');
  thumbnailsDomElements[imgIndex].classList.add('active');
}, 3000);

arrowRightDomElement.addEventListener("click", function() {
  carouselImages[imgIndex].classList.remove('show');
  thumbnailsDomElements[imgIndex].classList.remove('active');
  if (imgIndex === imgMaxIndex) {
    imgIndex = 0;
  } else {
    ++imgIndex;
  }
  carouselImages[imgIndex].classList.add('show');
  thumbnailsDomElements[imgIndex].classList.add('active');
});

arrowLeftDomElement.addEventListener("click", function() {
  carouselImages[imgIndex].classList.remove('show');
  thumbnailsDomElements[imgIndex].classList.remove('active');
  if (imgIndex === 0) {
    imgIndex = imgMaxIndex;
  } else {
    --imgIndex;
  }
  carouselImages[imgIndex].classList.add('show');
  thumbnailsDomElements[imgIndex].classList.add('active');
})


// funzione che crea l'elemento HTML e inserisce nel carosello
function imgElement (path, title, desc) {
  const html = `
    <div class="carousel-img">
      <img src="${path}">
    <div class="overlay">
      <div class="overlay__title">${title}</div>
      <div class="overlay__description">
        ${desc}
      </div>
    </div>
  </div>
  `;

  carouselDomElement.innerHTML += html;
}