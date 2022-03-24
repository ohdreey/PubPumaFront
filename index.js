let button = document.getElementById('ctaText1');
let coords = document.querySelector('.coord');

console.log(coords);

button.addEventListener('click', fadeOut);

function fadeOut() {
  /* animation transparence  video */
  let ctaText = document.getElementById('videoBody');
  ctaText.style.opacity = '0';

  /* animation disparition video */
  let videoContenair = document.getElementById('videoContenair');
  if ((ctaText.style.opacity = '0')) {
    videoContenair.style.display = 'none';
  } else {
    videoContenair.style.display = 'inline';
  }

  /* animation apparition du texte footer  */
  let holderAnimTop = document.getElementById('holderAnimTop');
  holderAnimTop.style.transform = 'translateY(0px)';

  /* animation transition coordonnées vers le top */
  coords.style.transform = 'translateY(-30%)';

  /* animation disparition video */
  let chevron = document.querySelector('.chevron');
  chevron.style.display = 'none';
}
