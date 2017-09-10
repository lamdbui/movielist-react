class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies
    };

    this.stateUpdateMovieList = this.stateUpdateMovieList.bind(this);
    this.filterMovieList = this.filterMovieList.bind(this);
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

  render() {
    return (
      <div>
        <nav className="navbar">
          <h3 className="text-muted">Movie List</h3>
          <Search filterMovieListCallback={this.filterMovieList} />
        </nav>
        <div className="row">
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
