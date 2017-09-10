var MovieList = (props) => (
  <div className="movie-list">
    {props.movies.map((movie, index) => <div>{movie.title}</div>)}
  </div>
);

window.MovieList = MovieList;
