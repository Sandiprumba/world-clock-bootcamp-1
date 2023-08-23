import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
//lets mount the component using component did mount state
componentDidMount(){
  this.timerID = setInterval(() => this.tick(), 1000)
}

componentWillUnmount(){
  clearInterval(this.timerD);
}

tick(){
  this.setState({
    date: new Date()
  });
}

  render(){
    const {timeZone, name} = this.props;
    const options = {timeZone, hour: 'numeric', minute: 'numeric', second: 'numeric', hour24: true,};
    const currentTime = this.state.date.toLocaleDateString('en-US', options);
    const greeting = currentTime.includes('AM') ? 'Good morning' : 'good evening';

    return(
      <div>
        <h2>{greeting} {name}</h2>
        <p> this current time is {currentTime}</p>
      </div>
    )
  }
}
export default Clock;