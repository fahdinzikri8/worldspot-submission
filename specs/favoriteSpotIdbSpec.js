import { itActsAsFavoriteSpotModel } from './contract/favoriteSpotContract';
import FavoriteSpotIdb from '../src/scripts/data/favorite-idb';
 
describe('Favorite Spot Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteSpotIdb.getAllSpot()).forEach(async (spot) => {
      await FavoriteSpotIdb.deleteSpot(spot.id);
    });
  });
 
  itActsAsFavoriteSpotModel(FavoriteSpotIdb);
});