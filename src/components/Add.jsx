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
    const addQueryText = this.state.addQuery;
    // TODO: should we send a notification if the query is invalid?
    if (addQueryText) {
      // only clear the text if the new Movie was successfully added
      if(this.props.addMovieToListCallback(addQueryText)) {
        this.setState({ addQuery: '' });
      }
    }
  }

  render() {
    return (
      <div className="form-inline">
        <input className="form-control" type="text" value={this.state.addQuery} placeholder="Add New Movie..." onChange={this.handleChange} />
        <button className="btn hidden-sm-down" onClick={this.handleAddClick}>
          <span className="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    );
  }
};

window.Add = Add;
