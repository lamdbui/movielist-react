var App = (props) => (
  // <div className="video-list">
  //   {props.videos.map((v, k) => <VideoListEntry key={k} video={v} videoClickedStateCallback={props.videoClickedStateCallback}/>)}
  // </div>
  <div>
    Hello!
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
App.propTypes = {
  movies: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.App = App;