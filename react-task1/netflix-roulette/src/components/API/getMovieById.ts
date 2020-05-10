import API_DATA from './API_DATA';
import setReleaseYear from './setReleaseYear';
import getCreditsByMovieId from './getCreditsByMovieId';
import { Movie } from '../../common/types/Movie';
function getMovieById(movieId: number): any {
  const apiUrl = API_DATA.url;
  const apiKey = API_DATA.key;
  let requestMovie: Movie;
  return fetch(apiUrl + `movie/${movieId}` + `?api_key=${apiKey}`)
    .then((data) => data.json())
    .then((json) => {
      requestMovie = setReleaseYear([json])[0];
      return getCreditsByMovieId(requestMovie.id);
    })
    .then((credits: any) => {
      return new Promise((resolve, reject) => {
        requestMovie.cast = credits.cast;
        requestMovie.crew = credits.crew;
        resolve(requestMovie);
      });
    });
}
export default getMovieById;
