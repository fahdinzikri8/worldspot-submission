import UrlParser from '../../routes/url-parser';
import TheSpotDbSource from '../../data/the-spot-source';
import { createSpotDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteSpotIdb from '../../data/favorite-idb';

const DETAIL = {
  async render() {
    return `
            <div id="spot" class="spot"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const spot = await TheSpotDbSource.detailSpot(url.id);
    const spotContainer = document.querySelector('#spot');
    spotContainer.innerHTML = createSpotDetailTemplate(spot);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteSpot: FavoriteSpotIdb,
      spot: {
        ...spot,
      },
    });
  },
};

export default DETAIL;
