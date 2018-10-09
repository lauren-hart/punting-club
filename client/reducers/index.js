import {combineReducers} from 'redux'

import bets from './bets'
import members from './members'

export default combineReducers({
  bets,
  members
})
