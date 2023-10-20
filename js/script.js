//------------------------------------------------ GRUPPO FUNZIONI ------------------------

// funzione per creare la struttura html da inserire nell'html
function addImgElementToDOM (image, carouselElement) {
  const html = `
    <div class="carousel-img">
      <img src="${image.path}">
    <div class="overlay">
      <div class="overlay__title">${image.title}</div>
      <div class="overlay__description">
        ${image.text}
      </div>
    </div>
  </div>
  `;

  carouselElement.innerHTML += html;
}

// funzione per andare avanti con le slide del carosello
function nextSlide() {
  carouselImages[imgIndex].classList.remove('show');
  thumbnailsDomElements[imgIndex].classList.remove('active');
  if (imgIndex === imgMaxIndex) {
    imgIndex = 0;
  } else {
    ++imgIndex;
  }
  carouselImages[imgIndex].classList.add('show');
  thumbnailsDomElements[imgIndex].classList.add('active');
}

// funzione per andare indietro con le slide del carosello
function prevSlide() {
  carouselImages[imgIndex].classList.remove('show');
  thumbnailsDomElements[imgIndex].classList.remove('active');
  if (imgIndex === 0) {
    imgIndex = imgMaxIndex;
  } else {
    --imgIndex;
  }
  carouselImages[imgIndex].classList.add('show');
  thumbnailsDomElements[imgIndex].classList.add('active');
}


//------------------------------------------------ ARRAY DI OGGETTI IMMAGINE ----------------------
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

//------------------------------------------- LOGICA ------------------------------------------------

const carouselDomElement = document.getElementById('carousel');

// devo recuperare tutti i dettagli dagli oggetti e scinderli
images.forEach((image) => addImgElementToDOM(image, carouselDomElement));

//elementi dal DOM
const arrowLeftDomElement = carouselDomElement.querySelector('.arrow-left');
const arrowRightDomElement = carouselDomElement.querySelector('.arrow-right');

const thumbnailsDomElements = document.querySelectorAll('.thumbnail');

const playBtnDomElement = document.getElementById('play');
const stopBtnDomElement = document.getElementById('pause');

//creo un indice per selezionare le immagini 
let imgIndex = 0;
let imgMaxIndex = images.length - 1;

// creo l'effetto click sulle thumbnail
thumbnailsDomElements.forEach((thumb, i) => {
  thumb.addEventListener('click', function () {
    carouselImages[imgIndex].classList.remove('show');
    thumbnailsDomElements[imgIndex].classList.remove('active');
    imgIndex = i;
    thumbnailsDomElements[imgIndex].classList.add('active');
    carouselImages[imgIndex].classList.add('show');
  })
})

//recupero gli elementi generati dal DOM
const carouselImages = document.querySelectorAll('.carousel-img');

carouselImages[imgIndex].classList.add('show');
thumbnailsDomElements[imgIndex].classList.add('active');


let startSliding;
// gestisco gli eventListeners sulle arrow
playBtnDomElement.addEventListener('click', () => {
  startSliding = setInterval(nextSlide, 3000);
})

stopBtnDomElement.addEventListener('click', () => clearInterval(startSliding));
  
arrowRightDomElement.addEventListener("click", nextSlide);
arrowLeftDomElement.addEventListener("click", prevSlide);
