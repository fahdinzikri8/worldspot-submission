import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../../global/config';

const createSpotDetailTemplate = (item) => `
  <div class="detail_container">
  <img class="spot_detail_image lazyload" data-src="${CONFIG.BASE_IMAGE_URL.large + item.pictureId}" alt="${item.name} image" />
    <div class="spot_info">
      <h2>${item.name}</h2>
      <h3>Rating :</h3>
      <p>${item.rating}/5 <i class="fa fa-star" aria-hidden="true"></i></p>
      <h3>Address :</h3>    
      <p>${item.address}</p>
      <h3>City :</h3>
      <p>${item.city}</p>
      <h3>Description :</h3>
      <p>${item.description}</p>
      <h3>Menus :</h3>
      <ul>Foods :</ul>
      ${item.menus.foods.length > 0 && item.menus.foods.map((food) => `
        <li>${food.name}</li>
      `).join('')}
      <ul>Drinks :</ul>
      ${item.menus.drinks.length > 0 && item.menus.drinks.map((drink) => `
          <li>${drink.name}</li>
        `).join('')}
      <h3>Reviews :</h3>
      ${item.customerReviews.length > 0 && item.customerReviews.map((custReview) => `
        <div class="detail_reviews">
          <span class="customer_name">${custReview.name}, ${custReview.date}</span>
          <span class="customer_review">"${custReview.review}"</span>
          <hr>
        </div>
        `).join('')}
    </div>
  </div>
`;

const createSpotItemTemplate = (item) => `
    <div class="gridItem">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL.small + item.pictureId}" alt="${item.name} image">
        <div class="rating">
        <div class="stars">
            <svg viewBox="0 0 576 512" width="100">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
            </svg><svg viewBox="0 0 576 512" width="100">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
            </svg><svg viewBox="0 0 576 512" width="100">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
            </svg><svg viewBox="0 0 576 512" width="100">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
            </svg><svg viewBox="0 0 576 512" width="100">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
            </svg>
            <div class="cover" style="width: ${item.rating / 0.05}%;">
            <svg viewBox="0 0 576 512" width="100">
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
            </svg><svg viewBox="0 0 576 512" width="100">
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
            </svg><svg viewBox="0 0 576 512" width="100">
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
            </svg><svg viewBox="0 0 576 512" width="100">
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
            </svg><svg viewBox="0 0 576 512" width="100">
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
            </svg>
            </div>
        </div>
        <span aria-label="rating ${item.rating}.">(${item.rating})</span>
        </div>
        <h5><a href="/#/detail/${item.id}">${item.name}</a></h5>
        <p>${item.description}</p>
    </div>
`;
const createLikeSpotButtonTemplate = () => `
  <button aria-label="like this spot" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeSpotButtonTemplate = () => `
  <button aria-label="unlike this spot" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createSpotDetailTemplate,
  createSpotItemTemplate,
  createLikeSpotButtonTemplate,
  createUnlikeSpotButtonTemplate,
};
