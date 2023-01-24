import API_ENDPOINT from '../global/api-endpoint';

class TheSpotDbSource {
  static async listSpot() {
    const response = await fetch(API_ENDPOINT.LIST());
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailSpot(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheSpotDbSource;
