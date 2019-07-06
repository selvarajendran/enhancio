//define the initial state
const initialState = {
    status: "",
    users: [],
    error: ""
  }
  
  //define a reducer with an intitalized state and logic to handle action
  function GithubUsersList(state = initialState, action) {
    switch(action.type) {
      case 'FETCH_REQUEST':
        const requested = Object.assign({}, state, {
          status: action.status
        })
        return requested
      case 'FETCH_SUCCESS':
        const successful = Object.assign({}, state, {
          status: action.status,
          users: action.users
        })
        return successful
      case 'FETCH_FAILURE':
        const failed = Object.assign({}, state, {
          status: action.status,
          error: action.error
        })
        return failed
      default:
        return state
    }
  }
  
  export default GithubUsersList
  