import request from 'superagent'

export const GET_RAWBETS_PENDING = 'GET_RAWBETS_PENDING'
export const GET_RAWBETS = 'GET_RAWBETS'
export const GET_RAWBETS_ERROR = 'GET_RAWBETS_ERROR'

export const getRawBetsPendng = () => ({type: GET_RAWBETS_PENDING})

export const getRawBetsList = rawBets => ({
  type: GET_RAWBETS,
  rawBets
})

export const getBetsError = error => ({
  type: GET_RAWBETS_ERROR,
  error
})

// GET BETS
export function getBets () {
  return (dispatch) => {
    dispatch(getRawBetsPendng())
    return request
      .get(`/api/v1/bets`)
      .then(res => {
        dispatch(getRawBetsList(res.body.result))
        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        dispatch(getBetsError(err.message))
      })
  }
}

// DELETE BETS
export function deleteBet (id) {
  return (dispatch) => {
    dispatch(getRawBetsPendng())
    return request
      .delete(`/api/v1/bets/${id}`)
      .then(res => {
        dispatch(getRawBetsList(res.body.result))
        dispatch(getBets())
        // eslint-disable-next-line no-console
        console.log('deleting your bet')
      })
      .catch(err => {
        dispatch(getBetsError(err.message))
      })
  }
}

// ADD BET
export function addBet (bet) {
  return (dispatch) => {
    dispatch(getRawBetsPendng())
    return request
      .post(`/api/v1/bets/addbet`, bet)
      .then(res => {
        dispatch(getRawBetsList(res.body.result))
        dispatch(getBets())
        // eslint-disable-next-line no-console
        console.log('adding your bet')
      })
      .catch(err => {
        dispatch(getBetsError(err.message))
      })
  }
}

// EDIT BET
export function editBet (bet, id) {
  return (dispatch) => {
    dispatch(getRawBetsPendng())
    return request
      .put(`/api/v1/bets/editbet/${id}`, bet)
      .then(res => {
        console.log(res.body.result)
        dispatch(getRawBetsList(res.body.result))
        dispatch(getBets())
        // eslint-disable-next-line no-console
        console.log('edited your bet')
      })
      .catch(err => {
        dispatch(getBetsError(err.message))
      })
  }
}