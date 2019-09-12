import React, { Component } from 'react';
import robot from '../../assets/robot.svg';
import RobotContext from '../../contexts/RobotContext';
import './Grid.scss';

class Grid extends Component {
  static contextType = RobotContext

  render() {
    const { positionX, positionY, direction } = this.context
    const robotPosition = positionX + " " + positionY + " " + direction

    return (
      <div className="grid">
        <img id="robot" src={robot} alt="robot" className={robotPosition} />
        <div className="row row-1">
          <div className="box box-1" />
          <div className="box box-2" />
          <div className="box box-3" />
          <div className="box box-4" />
          <div className="box box-5" />
        </div>
        <div className="row row-2">
          <div className="box box-1" />
          <div className="box box-2" />
          <div className="box box-3" />
          <div className="box box-4" />
          <div className="box box-5" />
        </div>
        <div className="row row-3">
          <div className="box box-1" />
          <div className="box box-2" />
          <div className="box box-3" />
          <div className="box box-4" />
          <div className="box box-5" />
        </div>
        <div className="row row-4">
          <div className="box box-1" />
          <div className="box box-2" />
          <div className="box box-3" />
          <div className="box box-4" />
          <div className="box box-5" />
        </div>
        <div className="row row-5">
          <div className="box box-1" />
          <div className="box box-2" />
          <div className="box box-3" />
          <div className="box box-4" />
          <div className="box box-5" />
        </div>
      </div>
    );
  }
}

export default Grid;