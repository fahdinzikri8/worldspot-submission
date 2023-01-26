import FavoriteSpotIdb from '../../data/favorite-idb';
import { createSpotItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content_heading">Your Favorites Spot</h2>
        <div id="gridList" class="gridList"></div>
      </div>
    `;
  },

  async afterRender() {
    const spot = await FavoriteSpotIdb.getAllSpot();
    const spotContainer = document.querySelector('#gridList');
    if (spot == null || spot.length == 0) {
      spotContainer.innerHTML += `
      <div class="handle_favorite">
        <span>You have no favorites</span>
      </div>
    `;
    } else {
      spot.forEach((spotItem) => {
        spotContainer.innerHTML += createSpotItemTemplate(spotItem);
      });
    }
  },
};

export default Like;
