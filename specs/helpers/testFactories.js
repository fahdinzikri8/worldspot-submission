import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteSpotIdb from '../../src/scripts/data/favorite-idb';
 
const createLikeButtonPresenterWithSpot = async (spot) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteSpot: FavoriteSpotIdb,
    spot,
  });
};
 
export { createLikeButtonPresenterWithSpot };