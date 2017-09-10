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
    //this.setState({value: event.target.value});
    console.log('LAM', this.state.searchQuery);
    this.props.filterMovieListCallback(this.state.searchQuery);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" placeholder="Search..." onChange={this.handleChange} />
        <button className="btn hidden-sm-down" onClick={this.handleSearchClick}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
};

window.Search = Search;
