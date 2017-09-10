var App = (props) => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div>Search here!</div>
      </div>
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
