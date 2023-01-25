import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const idbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteSpotIdb = {
  async getSpot(id) {
    if (!id) {
      return null;
    }
    return (await idbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllSpot() {
    return (await idbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putSpot(spot) {
    // eslint-disable-next-line no-prototype-builtins
    if (!spot.hasOwnProperty('id')) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return (await idbPromise).put(OBJECT_STORE_NAME, spot);
  },
  async deleteSpot(id) {
    return (await idbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteSpotIdb;
