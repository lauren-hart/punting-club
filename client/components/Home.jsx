import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Leaderboard from './Leaderboard'
import {connect} from 'react-redux'
import {getBets} from '../actions/bets'
import Timetable from './Timetable'

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
      <div>
        <div className="bg-grass"></div>
        <Header />
        <div className="row">
          <div className="col-md-2"><Timetable />
          </div>
          <div className="col-md-8"><Leaderboard
            percentColour={this.percentColour}/>
          </div>
        </div>
        <Footer />
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
