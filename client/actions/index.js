import request from 'superagent'

export const GET_RAWBETS_PENDING = 'GET_RAWBETS_PENDING'
export const GET_RAWBETS = 'GET_RAWBETS'
export const GET_RAWBETS_ERROR = 'GET_RAWBETS_ERROR'

export const getRawBetsPendng = () => ({type: GET_RAWBETS_PENDING})

export const getRawBetsList = rawBets => ({
  type: GET_RAWBETS,
  rawBets: rawBets
})

export const getBetsError = error => ({
  type: GET_RAWBETS_ERROR,
  error
})

export function getBets () {
  return (dispatch) => {
    dispatch(getRawBetsPendng())
    return request
      .get(`/api/v1/bets`)
      .then(res => {
        // eslint-disable-next-line no-console
        console.log('before dispatch', res.body.result)
        dispatch(getRawBetsList(res.body.result))
        // eslint-disable-next-line no-console
        console.log('success')
        console.log('I am in the redux store', res.body.result)
      })
      .catch(err => {
        dispatch(getBetsError(err.message))
      })
  }
}
