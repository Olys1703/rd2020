function setReleaseYear(movies: any) {
  return movies.map((movie: any) => {
    let releaseDate = new Date(movie.release_date);
    movie.release_year = releaseDate.getFullYear();
    //movie.genres = subtitleGenre(movie.genre_ids);
    return movie;
  });
}
export default setReleaseYear;
