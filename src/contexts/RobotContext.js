import React, { Component } from 'react'


const RobotContext = React.createContext({
  positionX: '',
  positionY: '',
  direction: '',
  handleLeft: () => { },
  handleUp: () => { },
  handleRight: () => { },
  handleDown: () => { },
  handleGo: () => { },
})

export default RobotContext

export class RobotProvider extends Component {
  state = {
    positionX: 'X-1',
    positionY: 'Y-1',
    direction: 'down'
  };

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
    const value = {
      positionX: this.state.positionX,
      positionY: this.state.positionY,
      direction: this.state.direction,
      handleLeft: this.handleLeft,
      handleUp: this.handleUp,
      handleRight: this.handleRight,
      handleDown: this.handleDown,
      handleGo: this.handleGo,
    }
    return (
      <RobotContext.Provider value={value}>
        {this.props.children}
      </RobotContext.Provider>
    )
  }
}

