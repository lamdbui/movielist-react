class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  handleSearchClick() {
    this.props.filterMovieListCallback(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" placeholder="Search..." value={this.state.searchQuery} onChange={this.handleChange} />
        <button className="btn hidden-sm-down" onClick={this.handleSearchClick}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
};

window.Search = Search;
