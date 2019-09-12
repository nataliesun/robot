import React from 'react';
import './App.scss';
import robot from '../../assets/robot.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends React.Component {
  state = {
    positionX: "X-1",
    positionY: "Y-1",
    direction: "down"
  }

  handleLeft = () => {
    this.setState({
      direction: "left"
    })
  }

  handleUp = () => {
    this.setState({
      direction: "up"
    })
  }

  handleRight = () => {
    this.setState({
      direction: "right"
    })
  }

  handleDown = () => {
    this.setState({
      direction: "down"
    })
  }

  handleGo = () => {
    const { positionX, positionY, direction } = this.state

    let numX = Number(positionX.split("-")[1])
    let numY = Number(positionY.split("-")[1])

    console.log(numX, numY)

    if (direction === "down" && numY < 5) {
      numY = numY + 1

      this.setState({
        positionY: "Y-" + numY
      })
    }

    if (direction === "right" && numX < 5) {
      numX = numX + 1

      this.setState({
        positionX: "X-" + numX
      })
    }

    if (direction === "left" && numX > 1) {
      numX = numX - 1

      this.setState({
        positionX: "X-" + numX
      })
    }

    if (direction === "up" && numY > 1) {
      numY = numY - 1

      this.setState({
        positionY: "Y-" + numY
      })
    }
  }

  render() {
    const { positionX, positionY, direction } = this.state
    const robotPosition = positionX + " " + positionY + " " + direction
    return (
      <div className="App">
        <img id="robot" src={robot} alt="robot" className={robotPosition} />
        <div className="grid">
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
        <div className="controls">
          <div className="directions">
            <button className="left-btn" onClick={this.handleLeft}><FontAwesomeIcon icon="chevron-left" /></button>
            <button className="up-btn" onClick={this.handleUp}><FontAwesomeIcon icon="chevron-up" /></button>
            <button className="right-btn" onClick={this.handleRight}><FontAwesomeIcon icon="chevron-right" /></button>
            <button className="down-btn" onClick={this.handleDown}><FontAwesomeIcon icon="chevron-down" /></button>
          </div>
          <button className="go" onClick={this.handleGo}></button>
        </div>
      </div>
    );
  }
}

export default App;