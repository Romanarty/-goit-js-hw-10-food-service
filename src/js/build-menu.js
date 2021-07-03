import refs from './build-menu';
import menu from '../data/menu.json'
import menuListTempl from '../template/menuListTempl';

const buildMenu = () => {
  refs.menuList.insertAdjacentHTML('beforeend', menuListTempl(menu));
};

export default buildMenu();
