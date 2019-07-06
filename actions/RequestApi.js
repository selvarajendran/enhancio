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
          let finalUsers = [];
          const users = response.data.map(user => {
            axios.get(user.url)
              .then(res => {
                finalUsers.push(res.data);
                dispatch(FetchSuccess(finalUsers))
              })
          });
        }
      })
      .catch(e => {
        //dispatch FetchFailure, order 3
        dispatch(FetchFailure(e.response.data.message))
      });

    //dispatch FetchRequest, order 1
    dispatch(FetchRequest())
  }
}

export default RequestApi
