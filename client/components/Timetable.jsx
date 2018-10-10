import React from 'react'
import {connect} from 'react-redux'

class Timetable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: '',
      weekday: ''
    }
    this.setDate = this.setDate.bind(this)
    this.setWeekday = this.setWeekday.bind(this)
  }

  componentDidMount () {
    this.setDate()
  }

  setDate () {
    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    this.setState({
      date: date
    })
  }

  setWeekday () {
    switch (new Date().getDay()) {
      case 0:
      case 6:
        return 'Weekend'
      default:
        return 'Not the weekend yet!'
    }
  }

  render () {
    return (
      <div>
        <h3>Next to bet</h3>
        <div className="timetable">
          <h5>Today is...</h5>
          <h5>{this.state.date}</h5>
          <p>{this.setWeekday()}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(Timetable)
