import FavoriteSpotIdb from '../src/scripts/data/favorite-idb';
import * as TestFactories from './helpers/testFactories';
 
describe('Unliking A Spot', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteSpotIdb.putSpot({ id: 's1knt6za9kkfw1e867' });
  });
 
  afterEach(async () => {
    await FavoriteSpotIdb.deleteSpot('s1knt6za9kkfw1e867');
  });
 
  it('should display unlike widget when the spot has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithSpot({ id: 's1knt6za9kkfw1e867' });
 
    expect(document.querySelector('[aria-label="unlike this spot"]'))
        .toBeTruthy();
  });
 
  it('should not display like widget when the spot has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithSpot({ id: 's1knt6za9kkfw1e867' });
 
    expect(document.querySelector('[aria-label="like this spot"]'))
        .toBeFalsy();
  });
 
  it('should be able to remove liked spot from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithSpot({ id: 's1knt6za9kkfw1e867' });
    
    document.querySelector('[aria-label="unlike this spot"]').dispatchEvent(new Event('click'));
 
    expect(await FavoriteSpotIdb.getAllSpot()).toEqual([]);
  });
 
  it('should not throw error if the unliked spot is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithSpot({ id: 's1knt6za9kkfw1e867' });
 
    // hapus dulu spot dari daftar spot yang disukai
    await FavoriteSpotIdb.deleteSpot('s1knt6za9kkfw1e867');
 
    // kemudian, simulasikan pengguna menekan widget batal menyukai spot
    document.querySelector('[aria-label="unlike this spot"]')
        .dispatchEvent(new Event('click'));
 
    expect(await FavoriteSpotIdb.getAllSpot()).toEqual([]);
  });
});