var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

var News = React.createClass({

  getNewsData: function() {
    return this.props.data.map(function(item, index) {
      return (
        <div key={index}>
          <p className="news__author">{item.author}:</p>
          <p className="news__text">{item.text}</p>
        </div>
      )
    })
  },

  render: function() {
    return (
      <div className="news">
        {this.getNewsData()}
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
        <News data={my_news}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
