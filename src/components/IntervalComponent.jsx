import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInterval } from '../actions/index';


const IntervalComponent = () => {
  let disabled = true;

  const interval = useSelector(state => state.interval);
  const dispatch = useDispatch();
  const handleChange = (interval) => dispatch(changeInterval({ interval }));
  
  if (interval > 1) {
    disabled = false;
  } 
  if (interval <= 1) {
    disabled = true;
  }
    
  return (
    <div className="card-footer d-flex justify-content-around">
      <span className="card-text align-self-center">Update interval:</span>
      <button onClick={() => handleChange(-1)} type="button" className="btn btn-primary" disabled={disabled}>-</button>
      <span className="align-self-center">{interval}</span>
      <button onClick={() => handleChange(1)} type="button" className="btn btn-primary">+</button>
    </div>
  );
}

export default IntervalComponent;