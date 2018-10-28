import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Leaderboard from './Leaderboard'
import {connect} from 'react-redux'
import {getBets} from '../actions/bets'
import Timetable from './Timetable'
// import Login from './Login'
import Balance from './Balance'

class Home extends React.Component {
  componentDidMount () {
    // triggering getBets action creator
    this.props.dispatch(getBets())
  }

  // Change the colour of percentage won based on percentage
  percentColour (betPercentage) {
    const red = {background: '#C34242', color: 'white'}
    const yellow = {background: '#E9D700', color: 'white'}
    const green = {background: '#1F7838', color: 'white'}
    const purple = {background: '#BE29EC', color: 'white'}

    if (betPercentage < 50) {
      return red
    } else if (betPercentage < 100) {
      return yellow
    } else if (betPercentage < 200) {
      return green
    } else if (betPercentage > 200) {
      return purple
    } else {
      return red
    }
  }
  render () {
    return (
      <div className="container-fluid">
        <div className="bg-grass"></div>
        <div className="sidebar">
          <Header />
          <Footer />
        </div>
        <div className="timetable">
          <Timetable />
          {/* <Login /> */}
        </div>
        <div className="leaderboard">
          <Leaderboard
            percentColour={this.percentColour}/>
        </div>
        <Balance />


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(Home)
