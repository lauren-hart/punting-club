import React from 'react'

class Calculator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      display: '',
      lastNum: [],
      isOperator: false,
      operator: null,
      isEquals: false,
      answer: '',
      isDecimal: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    const type = e.target.name
    const key = e.target.value
    if (type === 'operator') {
      this.handleOperator(key)
    } else if (type === 'equals') {
      this.handleEquals()
    } else {
      this.handleDigit(key, type)
    }
  }
  
  render () {
    return (
      <div>
        <div className="bg"></div>
        <h1>You do the math...</h1>
        <div className='calculator'>
          <div className="display">
            <input
              placeholder="0"
              value={this.state.display}
              readOnly>
            </input>
          </div>
          <div className="keys">
            <p>
              <button value="7" name="digit" onClick={this.handleClick} className="button blue">7</button>
              <button value="8" name="digit" onClick={this.handleClick} className="button blue">8</button>
              <button value="9" name="digit" onClick={this.handleClick} className="button blue">9</button>
              <button value="/" name="operator" onClick={this.handleClick} className="button white">/</button>
            </p>
            <p>
              <button value="4" name="digit" onClick={this.handleClick} className="button blue">4</button>
              <button value="5" name="digit" onClick={this.handleClick} className="button blue">5</button>
              <button value="6" name="digit" onClick={this.handleClick} className="button blue">6</button>
              <button value="x" name="operator" onClick={this.handleClick} className="button white">x</button>
            </p>
            <p>
              <button value="1" name="digit" onClick={this.handleClick} className="button blue">1</button>
              <button value="2" name="digit" onClick={this.handleClick} className="button blue">2</button>
              <button value="3" name="digit" onClick={this.handleClick} className="button blue">3</button>
              <button value="-" name="operator" onClick={this.handleClick} className="button white">-</button>
            </p>
            <p>
              <button value="0" name="digit" onClick={this.handleClick} className="button blue">0</button>
              <button value="." name="decimal" onClick={this.handleClick} className="button blue">.</button>
              <button value="=" name="equals" onClick={this.handleClick} className="button orange">=</button>
              <button value="+" name="operator" onClick={this.handleClick} className="button white long">+</button>
            </p>
            <p>
              <button value="" name="digit" onClick={this.handleClear} className="button orange">AC</button>
              <button value="" name="digit" onClick={this.handleClearLast} className="button orange">CE</button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator
