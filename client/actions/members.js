import request from 'superagent'

export const GET_MEMBERS_PENDING = 'GET_MEMBERS_PENDING'
export const GET_MEMBERS = 'GET_MEMBERS'
export const GET_MEMBERS_ERROR = 'GET_MEMBERS_ERROR'

export const getMembersPending = () => ({type: GET_MEMBERS_PENDING})

export const getMembersList = members => ({
  type: GET_MEMBERS,
  members
})

export const getMembersError = error => ({
  type: GET_MEMBERS_ERROR,
  error
})

// GET MEMBERS
export function getMembers () {
  return (dispatch) => {
    dispatch(getMembersPending())
    return request
      .get(`/api/v1/members`)
      .then(res => {
        dispatch(getMembersList(res.body.result))
        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        dispatch(getMembersError(err.message))
      })
  }
}

// DELETE MEMBERS
export function deleteMember (id) {
  return (dispatch) => {
    dispatch(getMembersPending())
    return request
      .delete(`/api/v1/members/${id}`)
      .then(res => {
        dispatch(getMembersList(res.body.result))
        dispatch(getMembers())
        // eslint-disable-next-line no-console
        console.log('deleting your member')
      })
      .catch(err => {
        dispatch(getMembersError(err.message))
      })
  }
}

// ADD member
export function addMember (member) {
  return (dispatch) => {
    dispatch(getMembersPending())
    return request
      .post(`/api/v1/members/addMember`, member)
      .then(res => {
        dispatch(getMembersList(res.body.result))
        dispatch(getMembers())
        // eslint-disable-next-line no-console
        console.log('adding your member')
      })
      .catch(err => {
        dispatch(getMembersError(err.message))
      })
  }
}
