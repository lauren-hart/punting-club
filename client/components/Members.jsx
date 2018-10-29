import React from 'react'
import {connect} from 'react-redux'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import {getMembers} from '../actions/members'

class Members extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    // triggering getBets action creator
    this.props.dispatch(getMembers())
  }

  render () {
    return (
      <div>
        <div className="bg-grass"></div>
        <div className="top-bar member-header">
          <h1 className="bets-h1">Members</h1>
          <Link to="/"><button className="nav-button-top">Home</button></Link>
          <Link to="/bets"><button className="nav-button-top">Bets</button></Link>
        </div>
        <table className="table members">
          <thead className="thead-dark">
            <tr>
              <th>Bielby/Hart</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Bielby/Hart') {
                return <td key={item.id}>{item.person}</td>
              }
            })}</tr>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Bielby/Hart') {
                return <td key={item.id}>{item.email}</td>
              }
            })}</tr>
          </tbody>
        </table>
        <table className="table members">
          <thead className="thead-dark">
            <tr>
              <th>Scaglia/Scaglia</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Scaglia/Scaglia') {
                return <td key={item.id}>{item.person}</td>
              }
            })}</tr>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Scaglia/Scaglia') {
                return <td key={item.id}>{item.email}</td>
              }
            })}</tr>
            <tr></tr>
          </tbody>
        </table>
        <table className="table members">
          <thead className="thead-dark">
            <tr>
              <th>Burningham/Sim</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Burningham/Sim') {
                return <td key={item.id}>{item.person}</td>
              }
            })}</tr>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Burningham/Sim') {
                return <td key={item.id}>{item.email}</td>
              }
            })}</tr>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Burningham/Sim') {
                return <td key={item.id}><img src={item.soloimage} /></td>
              }
            })}</tr>
          </tbody>
        </table>
        <Footer />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets,
    members: state.members.members
  }
}

export default connect(mapStateToProps)(Members)
