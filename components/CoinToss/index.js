import {Component} from 'react'

import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    isClicked: false,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const toss = Math.floor(Math.random() * 2)

    if (toss === 0) {
      this.setState(previousState => ({
        headsCount: previousState.headsCount + 1,
        isClicked: false,
      }))
    } else {
      this.setState(previousState => ({
        tailsCount: previousState.tailsCount + 1,
        isClicked: true,
      }))
    }
  }

  resultOfImg = () => {
    const {isClicked} = this.state

    return isClicked ? tailsImg : headsImg
  }

  render() {
    const {headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={this.resultOfImg()}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
