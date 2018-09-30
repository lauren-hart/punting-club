import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// Functions  to pass to the back end for API requests
// import {getFruits} from '../apiClient'

import Home from './Home'
import Bets from './Bets'
// import Addbet from './AddBet'
// import Members from './Members'
// import Datacheck from './DataCheck'
// import Leaderboard from './Leaderboard'
// import EditBet from './EditBet'

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/bets' component={Bets} />
            {/* <Route path='/addbet' component={Addbet}/>
          <Route path='/members' component={Members}/>
          <Route path='/datacheck' component={Datacheck}/>
          <Route exact path='/' component={Leaderboard}/>
          <Route exact path='/editbet' component={EditBet}/> */}
          </div>
        </Router>
      </div>
    )
  }
}
