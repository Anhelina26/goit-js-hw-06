const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const newGallery = document.querySelector('.gallery');
// console.dir(newGallery);

const  galleryList = images.reduce((el, image) => {
  return (
    el +
    `<li class="galerry-item"><img width = 350px src="${image.url}" alt="${image.alt}"></li>`
  );
}, '');

newGallery.insertAdjacentHTML('beforeend', galleryList);