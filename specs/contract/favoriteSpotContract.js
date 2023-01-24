const itActsAsFavoriteSpotModel = (favoriteSpot) => {
    it('should return the spot that has been added', async () => {
      favoriteSpot.putSpot({ id: 'rqdv5juczeskfw1e867' });
      favoriteSpot.putSpot({ id: 's1knt6za9kkfw1e867' });
   
      expect(await favoriteSpot.getSpot('rqdv5juczeskfw1e867'))
        .toEqual({ id: 'rqdv5juczeskfw1e867' });
      expect(await favoriteSpot.getSpot('s1knt6za9kkfw1e867'))
        .toEqual({ id: 's1knt6za9kkfw1e867' });
      expect(await favoriteSpot.getSpot(3))
        .toEqual(undefined);
    });
   
    it('should refuse a spot from being added if it does not have the correct property', async () => {
      favoriteSpot.putSpot({ aProperty: 'property' });
   
      expect(await favoriteSpot.getAllSpot())
        .toEqual([]);
    });
   
    it('can return all of the spot that have been added', async () => {
      favoriteSpot.putSpot({ id: 'rqdv5juczeskfw1e867' });
      favoriteSpot.putSpot({ id: 's1knt6za9kkfw1e867' });
   
      expect(await favoriteSpot.getAllSpot())
        .toEqual([
          { id: 'rqdv5juczeskfw1e867' },
          { id: 's1knt6za9kkfw1e867' },
        ]);
    });
   
    it('should remove favorite spot', async () => {
      favoriteSpot.putSpot({ id: 'rqdv5juczeskfw1e867' });
      favoriteSpot.putSpot({ id: 's1knt6za9kkfw1e867' });
      favoriteSpot.putSpot({ id: 'w9pga3s2tubkfw1e867' });
   
      await favoriteSpot.deleteSpot('rqdv5juczeskfw1e867');
   
      expect(await favoriteSpot.getAllSpot())
        .toEqual([
          { id: 's1knt6za9kkfw1e867' },
          { id: 'w9pga3s2tubkfw1e867' },
        ]);
    });
   
    it('should handle request to remove a spot even though the spot has not been added', async () => {
      favoriteSpot.putSpot({ id: 'rqdv5juczeskfw1e867' });
      favoriteSpot.putSpot({ id: 's1knt6za9kkfw1e867' });
      favoriteSpot.putSpot({ id: 'w9pga3s2tubkfw1e867' });
   
      await favoriteSpot.deleteSpot(4);
   
      expect(await favoriteSpot.getAllSpot())
        .toEqual([
          { id: 'rqdv5juczeskfw1e867' },
          { id: 's1knt6za9kkfw1e867' },
          { id: 'w9pga3s2tubkfw1e867' },
        ]);
    });
  };
   
  export { itActsAsFavoriteSpotModel };