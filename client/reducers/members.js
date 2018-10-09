import {
  GET_MEMBERS_PENDING,
  GET_MEMBERS,
  GET_MEMBERS_ERROR
}
  from '../actions/members'

const defaultState = {
  members: null,
  error: null,
  pending: false,
  editStatus: false
}

export default function (state = defaultState, {error, members, type}) {
  switch (type) {
    case GET_MEMBERS_PENDING:
      return Object.assign({}, state, {error: null, pending: true})

      // return {
      //   ...state,
      //   error: null,
      //   pending: true
      // }

    case GET_MEMBERS:
      return Object.assign({}, state, {error: null, pending: false, members})

      // return {
      //   ...state,
      //   members,
      //   error: null,
      //   pending: false
      // }

    case GET_MEMBERS_ERROR:
      return Object.assign({}, state, {error, pending: false, members: null})

      // return {
      //   ...state,
      //   members: null,
      //   error,
      //   pending: false
      // }

    default:
      return state
  }
}
