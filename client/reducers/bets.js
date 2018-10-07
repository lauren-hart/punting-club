import {
  GET_RAWBETS_PENDING,
  GET_RAWBETS,
  GET_RAWBETS_ERROR,
  GET_EDIT_STATUS}
  from '../actions/'

const defaultState = {
  bets: null,
  error: null,
  pending: false,
  editStatus: false
}

export default function (state = defaultState, {error, rawBets, type}) {
  switch (type) {
    case GET_RAWBETS_PENDING:
      return Object.assign({}, state, {error: null, pending: true})

      // return {
      //   ...state,
      //   error: null,
      //   pending: true
      // }

    case GET_RAWBETS:
      return Object.assign({}, state, {error: null, pending: false, rawBets})

      // return {
      //   ...state,
      //   rawBets,
      //   error: null,
      //   pending: false
      // }

    case GET_RAWBETS_ERROR:
      return Object.assign({}, state, {error, pending: false, rawBets: null})

      // return {
      //   ...state,
      //   rawBets: null,
      //   error,
      //   pending: false
      // }

    case GET_EDIT_STATUS:
      return Object.assign({}, state, {error, pending: false, editStatus: false})

    default:
      return state
  }
}
