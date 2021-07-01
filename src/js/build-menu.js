import refs from './input-change';
import menu from '../menu.json'
import menuListTempl from '../template.hbs';

const buildMenu = () => {
  refs.menuList.insertAdjacentHTML('beforeend', menuListTempl(menu));
};

export default buildMenu();


 