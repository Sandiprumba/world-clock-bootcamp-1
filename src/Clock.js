import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        {this.props.timeZone}:{" "}
        {this.state.date.toLocaleString({
          timeZone: this.props.timeZone,
        })}
      </div>
    );
  }
}
export default Clock;
