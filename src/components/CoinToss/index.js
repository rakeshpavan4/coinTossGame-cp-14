// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {count: 0, status: true, heads: 0, tails: 0}

  TossTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevstate => ({heads: prevstate.heads + 1}))
      this.setState(prevstate => ({count: prevstate.count + 1}))
      this.setState({status: true})
    } else {
      this.setState(prevstate => ({tails: prevstate.tails + 1}))
      this.setState(prevstate => ({count: prevstate.count + 1}))
      this.setState({status: false})
    }
  }

  render() {
    const {count, heads, tails, status} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {status ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="image"
            />
          )}

          <button className="button" type="button" onClick={this.TossTheCoin}>
            Toss Coin
          </button>
          <div className="result">
            <p className="para">Total:{count}</p>
            <p className="para">Heads:{heads}</p>
            <p className="para">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
