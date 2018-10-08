import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import Footer from './Footer'

class Members extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <div className="bg-grass"></div>
        <Header />
        <h3 className="header">Members</h3>
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

export default connect(mapStateToProps)(Members)
