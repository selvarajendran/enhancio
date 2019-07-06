import axios from 'axios';
import FetchRequest from './FetchRequest';
import FetchSuccess from './FetchSuccess';
import FetchFailure from './FetchFailure';

function RequestApi() {
  return (dispatch) => {
    //API request
    axios.get('https://api.github.com/users?since=2010')
      .then(response => {
        if(response.message) {
          dispatch(FetchFailure(response.message))
        } else {
          const users = response.data.map(user => {return user});
          //dispatch FetchSuccess, order 2
          dispatch(FetchSuccess(users))
        }
      })
      .catch(e => {
        //dispatch FetchFailure, order 3
        dispatch(FetchFailure(e))
      });

    //dispatch FetchRequest, order 1
    dispatch(FetchRequest())
  }
}

export default RequestApi
