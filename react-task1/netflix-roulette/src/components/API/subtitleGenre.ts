import API_DATA from './API_DATA';
function subtitleGenre(movies: any) {
  return movies.map((movie: any) => {
    movie.genres = movie.genre_ids.map((genre: any) => {
      return API_DATA.genres.find((item) => item.id === genre);
    });
    return movie;
  });
}
export default subtitleGenre;
