// CSS
import './sass/main.scss';
 
// Input Change
import inputChange from './js/input-change';
 
import foodService from './menu.json';
import FoodServiceTemplate from './template.hbs';

console.log(foodService);
console.log(FoodServiceTemplate({food:foodService}));

const FoodServiceItemsGallery = document.querySelector('.js-menu');
FoodServiceItemsGallery.innerHTML = FoodServiceTemplate(foodService);
