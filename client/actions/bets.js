import request from 'superagent'

export const GET_BETS_PENDING = 'GET_BETS_PENDING'
export const GET_BETS = 'GET_BETS'
export const GET_BETS_ERROR = 'GET_BETS_ERROR'

export const getBetsPending = () => ({type: GET_BETS_PENDING})

export const getBetsList = bets => ({
  type: GET_BETS,
  bets
})

export const getBetsError = error => ({
  type: GET_BETS_ERROR,
  error
})

// This is triggered from component did mount in Bets.jsx
export const getBets = () => {
  return dispatch => {
    dispatch(getBetsPending())

    return request
      .get(`/api/v1/bets`)
      .then(res => dispatch(getBetsList(res.data.bets)))
      .catch(({response}) => dispatch(getBetsError(response.data.error)))
  }
}
