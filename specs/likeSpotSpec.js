import FavoriteSpotIdb from '../src/scripts/data/favorite-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Spot', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
 
  beforeEach(() => {
    addLikeButtonContainer();
  });
 
  it('should show the like button when the spot has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithSpot({ id: 's1knt6za9kkfw1e867' });
 
    expect(document.querySelector('[aria-label="like this spot"]'))
        .toBeTruthy();
  });

  it('should not show the unlike button when the spot has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithSpot({ id: 's1knt6za9kkfw1e867' });
 
    expect(document.querySelector('[aria-label="unlike this spot"]')).toBeFalsy();
  });
 
  it('should be able to like the spot', async () => {
    await TestFactories.createLikeButtonPresenterWithSpot({ id: 's1knt6za9kkfw1e867' });
 
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const spot = await FavoriteSpotIdb.getSpot('s1knt6za9kkfw1e867');
 
    expect(spot).toEqual({ id: 's1knt6za9kkfw1e867' });
    FavoriteSpotIdb.deleteSpot('s1knt6za9kkfw1e867');
  });
 
  it('should not add a spot again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithSpot({ id: 's1knt6za9kkfw1e867' });
 
    // Tambahkan spot dengan ID s1knt6za9kkfw1e867 ke daftar spot yang disukai
    await FavoriteSpotIdb.putSpot({ id: 's1knt6za9kkfw1e867' });
 
    // Simulasikan pengguna menekan tombol suka spot
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
 
    // tidak ada spot yang ganda
    expect(await FavoriteSpotIdb.getAllSpot()).toEqual([{ id: 's1knt6za9kkfw1e867' }]);
 
    FavoriteSpotIdb.deleteSpot('s1knt6za9kkfw1e867');
  });
 
  it('should not add a spot when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithSpot({});
    
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteSpotIdb.getAllSpot()).toEqual([]);
  });
});