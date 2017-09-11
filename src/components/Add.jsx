class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addQuery: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleChange(event) {
    this.setState({ addQuery: event.target.value });
  }

  handleAddClick() {
    const addQuery = this.state.addQuery;
    // TODO: should we send a notification if the query is invalid?
    if (addQuery) {
      this.props.addMovieToListCallback(addQuery);
    }
  }

  render() {
    return (
      <div className="form-inline">
        <input className="form-control" type="text" placeholder="Add New Movie..." onChange={this.handleChange} />
        <button className="btn hidden-sm-down" onClick={this.handleAddClick}>
          <span className="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    );
  }
};

window.Add = Add;
