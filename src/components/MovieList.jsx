class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  generateMovieEntries() {
    // case where we have to movies(e.g. when a search returns back no results)
    if (this.props.movies.length === 0) {
      let noMoviesFound = {
        title: 'No movies found...'
      };
      return <MovieListEntry movie={noMoviesFound} key={0} />
    }
    return this.props.movies.map((movie, index) => <MovieListEntry movie={movie} key={index} />);
  }

  render() {
    return (
      <div className="movie-list">
        <ul className="list-group">
          {this.generateMovieEntries()}
        </ul>
      </div>
    );
  }
};

window.MovieList = MovieList;
