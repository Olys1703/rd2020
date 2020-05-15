import { Movie } from '../../common/types/Movie';
import API_DATA from './API_DATA';
function setImgAPIPath(movies: Movie[]) {
  return movies.map((movie) => {
    movie.poster_path = API_DATA.posterPath + movie.poster_path;
    return movie;
  });
}

export default setImgAPIPath;
