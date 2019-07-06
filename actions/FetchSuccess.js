//define action within an action creator
function FetchSuccess(users) {
  const FETCH_SUCCESS = 'FETCH_SUCCESS'
  return {
    type: FETCH_SUCCESS,
    status: "success",
    users
  }
}

export default FetchSuccess
