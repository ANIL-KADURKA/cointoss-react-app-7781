// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    Total: 0,
    Heads: 0,
    Tails: 0,
  }

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({
        Heads: prevState.Heads + 1,
      }))
    } else {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({
        Tails: prevState.Tails + 1,
      }))
    }
    this.setState(prevState => ({
      Total: prevState.Total + 1,
    }))
  }

  render() {
    const {imageUrl, Heads, Tails, Total} = this.state

    return (
      <div className="coin-toss-game">
        <div className="card">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} className="image-icon" alt="toss result" />
          <button className="button" type="button" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="paraCont">
            <p className="para">Total: {Total}</p>
            <p className="para">Heads: {Heads}</p>
            <p className="para">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
