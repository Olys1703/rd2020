import API_DATA from './API_DATA';
import setReleaseYear from './setReleaseYear';
import subtitleGenre from './subtitleGenre';
function getMoviesByTitle(title: string): any {
  const apiUrl = API_DATA.url;
  const apiKey = API_DATA.key;
  return fetch(
    apiUrl + 'search/' + 'movie' + `?api_key=${apiKey}&query=${title}`
  )
    .then((data) => data.json())
    .then((json) => {
      return new Promise((resolve, reject) => {
        let movies = setReleaseYear(json.results);
        console.log('title before genre', movies);
        movies = subtitleGenre(movies);
        console.log('title after genre', movies);
        resolve(movies);
      });
    });
}
export default getMoviesByTitle;
