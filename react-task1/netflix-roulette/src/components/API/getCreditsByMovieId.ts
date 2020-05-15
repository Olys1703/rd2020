import API_DATA from './API_DATA';

function getCreditsByMovieId(movieId: number): any {
  const apiUrl = API_DATA.url;
  const apiKey = API_DATA.key;
  return fetch(
    `${apiUrl}movie/${movieId}/credits?api_key=${apiKey}`
  ).then((data) => data.json());
}
export default getCreditsByMovieId;
