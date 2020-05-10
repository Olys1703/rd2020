import API_DATA from './API_DATA';
import setReleaseYear from './setReleaseYear';
import subtitleGenre from './subtitleGenre';
function getMoviesByDirectorName(directorName: string): any {
  const apiUrl = API_DATA.url;
  const apiKey = API_DATA.key;
  return fetch(
    apiUrl + 'search/' + 'person' + `?api_key=${apiKey}&query=${directorName}`
  )
    .then((data) => data.json())
    .then((json) => {
      return json.results[0].id;
    })
    .then((id) =>
      fetch(
        apiUrl + 'person/' + id + '/combined_credits' + `?api_key=${apiKey}`
      )
    )
    .then((data) => data.json())
    .then((json) => {
      return new Promise((resolve, reject) => {
        let movies = setReleaseYear(json.crew);
        movies = subtitleGenre(movies);
        movies = movies.filter((movie: any) => movie.job === 'Director');
        console.log(movies);
        resolve(movies);
      });
    });
}
export default getMoviesByDirectorName;