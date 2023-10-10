import axios from 'axios';

const api_key = "live_lOzPewphvBmhfTAoGzRxi3ZaJsvGS420qKaz3iY6xu0TSU6xsKmZ0fkX2DwJcDK9"

axios.defaults.headers.common['x-api-key'] = api_key;

const basic = "https://api.thecatapi.com/v1/";

const fetchBreeds = () => {
  return axios
    .get(`${basic}breeds`, {
      headers: {
        'x-api-key': api_key
      }
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

const fetchCatByBreed = (breedId) => {
  return axios
    .get(`${basic}images/search?breed_ids=${breedId}`, {
      headers: {
        'x-api-key': api_key
      }
    })
    .then(response => {
      return response.data[0];
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export { fetchBreeds, fetchCatByBreed };