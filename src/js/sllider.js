import refs from './refs';

const img = [
  { id: 1, url: 'img1' },
  { id: 2, url: 'img2' },
  { id: 3, url: 'img3' },
];

refs.sliderList.addEventListener('click', handle);

function handle(el) {
  if (el.target.nodeName !== 'BUTTON') {
    return;
  }

  refs.btnPag.forEach(button => {
    button.classList.remove('active-pagination');
  });

  img.forEach(item => {
    if (+el.target.id === item.id) {
      el.target.classList.add('active-pagination');
      refs.heroBackground.setAttribute('id', item.url);
    }
  });
}
