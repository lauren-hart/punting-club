import request from 'superagent'

export const GET_BETS_PENDING = 'GET_BETS_PENDING'
export const GET_BETS = 'GET_BETS'
export const GET_BETS_ERROR = 'GET_BETS_ERROR'

export const getBetsPending = () => ({type: GET_BETS_PENDING})

export const getBetsList = bets => ({
  type: GET_BETS,
  bets: bets
})

export const getBetsError = error => ({
  type: GET_BETS_ERROR,
  error
})

export function getBets () {
  return (dispatch) => {
    dispatch(getBetsPending())
    return request
      .get(`/api/v1/bets`)
      .then(res => {
        // eslint-disable-next-line no-console
        console.log('before dispatch', res.body.result)
        // dispatch areaSuccess.
        dispatch(getBetsList(res.body.result))
        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        dispatch(getBetsError(err.message))
      })
  }
}
