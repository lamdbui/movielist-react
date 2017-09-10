var App = (props) => (
  <div>
    <nav className="navbar">
      <h3 className="text-muted">Movie List</h3>
      <div className="search">Search here!</div>
    </nav>
    <div className="row">
      <div className="col">
        <MovieList movies={props.movies} />
      </div>
    </div>
  </div>
);

App.propTypes = {
  movies: React.PropTypes.array.isRequired
};

window.App = App;
