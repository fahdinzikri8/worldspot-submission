import { itActsAsFavoriteSpotModel } from './contract/favoriteSpotContract';
 
let favoriteSpot = [];
 
const FavoriteSpotArray = {
  getSpot(id) {
    if (!id) {
      return;
    }
 
    return favoriteSpot.find((spot) => spot.id == id);
  },
 
  getAllSpot() {
    return favoriteSpot;
  },
 
  putSpot(spot) {
    if (!spot.hasOwnProperty('id')) {
      return;
    }
 
    // pastikan id ini belum ada dalam daftar favoriteSpot
    if (this.getSpot(spot.id)) {
      return;
    }
 
    favoriteSpot.push(spot);
  },
 
  deleteSpot(id) {
    // cara boros menghapus spot dengan meng-copy spot yang ada
    // kecuali spot dengan id == id
    favoriteSpot = favoriteSpot.filter((spot) => spot.id != id);
  },
};
 
describe('Favorite Spot Array Contract Test Implementation', () => {
  afterEach(() => favoriteSpot = []);
 
  itActsAsFavoriteSpotModel(FavoriteSpotArray);
});