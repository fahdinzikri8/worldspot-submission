import { createLikeSpotButtonTemplate, createUnlikeSpotButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteSpot, spot }) {
    this.likeButtonContainer = likeButtonContainer;
    this.spot = spot;
    this._favoriteSpot = favoriteSpot;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.spot;

    if (await this.isSpotExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isSpotExist(id) {
    const spot = await this._favoriteSpot.getSpot(id);
    return !!spot;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeSpotButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteSpot.putSpot(this.spot);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createUnlikeSpotButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteSpot.deleteSpot(this.spot.id);
      this.renderButton();
    });
  },
};

export default LikeButtonPresenter;
