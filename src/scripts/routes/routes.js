import HOME from '../views/pages/home';
import DETAIL from '../views/pages/detail';
import FAVORITES from '../views/pages/favorites';

const routes = {
  '/': HOME,
  '/detail/:id': DETAIL,
  '/favorites': FAVORITES,
};

export default routes;
