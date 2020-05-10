import API_DATA from './API_DATA';
import setReleaseYear from './setReleaseYear';
function getCreditsByMovieId(movieId: number): any {
  const apiUrl = API_DATA.url;
  const apiKey = API_DATA.key;
  return fetch(
    apiUrl + `movie/${movieId}/credits` + `?api_key=${apiKey}`
  ).then((data) => data.json());
  // .then((json) => {
  //   return new Promise((resolve, reject) => {
  //     let movie = setReleaseYear([json])[0];
  //     console.log(movie);
  //     resolve(movie);
  //   });
  // });
}
export default getCreditsByMovieId;
