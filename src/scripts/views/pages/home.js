import TheSpotDbSource from '../../data/the-spot-source';
import { createSpotItemTemplate } from '../templates/template-creator';

const HOME = {
  async render() {
    return `
            <div id="gridList" class="gridList"></div>
        `;
  },

  async afterRender() {
    const data = await TheSpotDbSource.listSpot();
    const container = document.getElementById('gridList');
    data.forEach((spot) => {
      container.innerHTML += createSpotItemTemplate(spot);
    });
  },
};

export default HOME;
