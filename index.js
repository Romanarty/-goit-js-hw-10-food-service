// CSS
import './sass/main.scss';
 
// Input Change
import inputChange from './src/js/input-change';
 
import foodService from './src/menu.json';
import FoodServiceTemplate from './template.hbs';

console.log(foodService);
console.log(FoodServiceTemplate({food:foodService}));

const FoodServiceItemsGallery = document.querySelector('.js-menu');
FoodServiceItemsGallery.innerHTML = FoodServiceTemplate(foodService);
