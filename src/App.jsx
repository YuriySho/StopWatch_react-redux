import React from 'react';
import IntervalComponent from './components/IntervalComponent';
import TimerComponent from './components/TimerComponent';
//import './App.css';

const App = () => {
  return (
    <div className="container w-25 p-3">
      <div className="card text-center">
        <div className="card-header">
        <h5 className="card-title">Stopwatch</h5>
        </div>
        <TimerComponent />
        <IntervalComponent />
      </div>
    </div>
  );
}

export default App;
