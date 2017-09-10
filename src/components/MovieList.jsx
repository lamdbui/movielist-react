var MovieList = (props) => (
  <div className="movie-list">
    <ul className="list-group">
      {props.movies.map((movie, index) => <MovieListEntry movie={movie} key={index} />)}
    </ul>
  </div>
);

window.MovieList = MovieList;
