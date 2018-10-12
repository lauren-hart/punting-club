import React from 'react'
import {connect} from 'react-redux'

class Editbet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <tr>
        <td><input placeholder={this.props.list.couple}></input></td>
        <td><input></input></td>
        <td><input></input></td>
        <td><input></input></td>
        <td><input></input></td>
        <td></td>
        <td><input></input></td>
        <td></td>
        <td></td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(Editbet)
