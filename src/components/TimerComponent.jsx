import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { state };
};

class TimerComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTime : 0
    };

    this.timer = null;
    this.disabled = false;
  
  }
  getSeconds = (time) => {
    return `0${time%60}`.slice(-2);
  };

  getMinutes = (time) => {
    return Math.floor(time/60);
  };

  handleStart = () => {
    const { interval } = this.props.state;
    this.timer = setInterval(() => {
      this.setState({ currentTime: this.state.currentTime + interval })
    }, interval * 1000);
    this.disabled = true;
  };

  handlePause = () => {
    this.disabled = false;
    clearInterval(this.timer);
    this.setState({ currentTime: this.state.currentTime });
  };

  handleStop = () => {
    clearInterval(this.timer);
    this.setState({ currentTime: 0 });
    this.disabled = false;
  };

  render() {
    const { currentTime } = this.state;
    return (
      <div className="card-body d-flex justify-content-around">
        <button onClick={this.handleStart} type="button" className="btn btn-info" disabled={this.disabled}>Start</button>
        <span className="align-self-center">{this.getMinutes(currentTime)}:{this.getSeconds(currentTime)}</span>
        <button onClick={this.handlePause} type="button" className="btn btn-info">Pause</button>
        <button onClick={this.handleStop} type="button" className="btn btn-info">Stop</button>
      </div>    
    );
  }
}

export default connect(mapStateToProps, null)(TimerComponent);