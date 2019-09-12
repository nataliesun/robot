import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RobotContext from '../../contexts/RobotContext';
import './Controls.scss';

class Controls extends Component {
  static contextType = RobotContext

  render() {
    const { handleLeft, handleUp, handleRight, handleDown, handleGo } = this.context;

    return (
      <div className="controls">
        <div className="directions">
          <button className="left-btn" onClick={handleLeft}><FontAwesomeIcon icon="chevron-left" /></button>
          <button className="up-btn" onClick={handleUp}><FontAwesomeIcon icon="chevron-up" /></button>
          <button className="right-btn" onClick={handleRight}><FontAwesomeIcon icon="chevron-right" /></button>
          <button className="down-btn" onClick={handleDown}><FontAwesomeIcon icon="chevron-down" /></button>
        </div>
        <button className="go" onClick={handleGo}></button>
      </div>
    );
  }
}

export default Controls;