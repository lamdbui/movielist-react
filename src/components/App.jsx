class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies
    };

    this.stateUpdateMovieList = this.stateUpdateMovieList.bind(this);
    this.filterMovieList = this.filterMovieList.bind(this);
    this.addMovieToList = this.addMovieToList.bind(this);
  }

  stateUpdateMovieList(newMovieList) {
    this.setState({
      movies: newMovieList
    });
  }

  filterMovieList(filterQuery) {
    var filteredMovieList = this.props.movies.filter(movie => {
      return (movie.title.toLowerCase()).includes(filterQuery.toLowerCase());
    });
    this.stateUpdateMovieList(filteredMovieList);
  }

  addMovieToList(newMovieTitle) {
    var duplicateMovieTitleFound = this.state.movies.some(movie => {
      return (movie.title === newMovieTitle);
    });
    // indicate true/false if the movie was successully added or not
    if (!duplicateMovieTitleFound) {
      const newMovie = { title: newMovieTitle };
      this.state.movies.push(newMovie);
      this.stateUpdateMovieList(this.state.movies);
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <h3 className="text-muted">Movie List</h3>
          <Search filterMovieListCallback={this.filterMovieList} />
        </nav>
        <div className="row mb-2">
          <div className="col">
            <Add addMovieToListCallback={this.addMovieToList} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <MovieList movies={this.state.movies} />
          </div>
        </div>
      </div>
    );
  }
};

App.propTypes = {
  movies: React.PropTypes.array.isRequired
};

window.App = App;
