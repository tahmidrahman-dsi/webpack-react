var SetIntervalMixin = {
  componentWillMount: function () {
    this.intervals = [];
  },
  setInerval: function () {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function () {
    this.intervals.forEach(clearInterval);
  },
};

var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require("create-react-class");

var TickTock = createReactClass({
  mixins: [SetIntervalMixin],
  getInitialState: function () {
    return { seconds: 0 };
  },
  componentDidMount: function () {
    this.setInerval(this.tick, 1000);
  },
  tick: function () {
    if ((heading = document.getElementById("heading"))) {
      var red = Math.floor(Math.random() * 255);
      var green = Math.floor(Math.random() * 255);
      var blue = Math.floor(Math.random() * 255);
      heading.style.color = `rgb(${red},${green},${blue})`;
    }

    this.setState({ seconds: this.state.seconds + 1 });
  },
  render: function () {
    return (
      <div>
        <h1 id="heading">Hello There!</h1>
        <p>React has been running for {this.state.seconds} seconds</p>
      </div>
    );
  },
});

ReactDOM.render(<TickTock />, document.getElementById("root"));
