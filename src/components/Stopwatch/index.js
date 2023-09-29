// Write your code here
import {Component} from 'react'
import './index.css'

const initialState = {
  timeElapsedInSeconds: 0,
}

class Stopwatch extends Component {
  state = initialState

  increaseSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStart = () => {
    this.stopWatchInterval = setInterval(this.increaseSeconds, 1000)
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStop = () => {
    clearInterval(this.stopWatchInterval)
  }

  onReset = () => {
    clearInterval(this.stopWatchInterval)
    this.setState(initialState)
  }

  stopWatchControllers = () => {
    const {timeElapsedInSeconds} = this.state
    return (
      <div className="button-container">
        <button type="button" className="start-btn" onClick={this.onStart}>
          Start
        </button>
        <button type="button" className="stop-btn" onClick={this.onStop}>
          Stop
        </button>
        <button type="button" className="reset-btn" onClick={this.onReset}>
          Reset
        </button>
      </div>
    )
  }

  getMinutesAndSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="stop-watch-bg-container">
        <div>
          <h1>Stopwatch</h1>
          <div className="stop-watch-card-container">
            <div className="card-timer-head">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stop-watch-icon"
              />
              <p className="timer-head">Timer</p>
            </div>
            <h1 className="stop-watch-timer">{this.getMinutesAndSeconds()}</h1>
            {this.stopWatchTimer}
            {this.stopWatchControllers()}
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
