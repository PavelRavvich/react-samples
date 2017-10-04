var News = React.createClass({
  render: function() {
    return (
      <div>
        News
      </div>
    );
  }
});

var Comments = React.createClass({
    render: function() {
      return (
        <div>
          comments
        </div>
      );
    }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        Всем привет, я компонент App!
        <Comments />
        <News />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
