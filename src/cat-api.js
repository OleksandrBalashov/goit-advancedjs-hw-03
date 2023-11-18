import axios from 'axios';
const API_KEY =
  'live_zCoIfZgI2pTuINdDO1yjDpbgcwKA9fmB1Fcl70UrefaGBjTUS9X0S4AtHVTqNUNC';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = API_KEY;

const fetchBreeds = () => axios.get('/breeds');

const fetchCatByBreed = breedId => {
  const params = new URLSearchParams({
    breed_ids: breedId,
  });

  return axios.get(`/images/search?${params}`);
};

export { fetchBreeds, fetchCatByBreed };
