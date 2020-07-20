import context from './context'
import AsyncStorage from '@react-native-community/async-storage';
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
}

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token);
    // update the token
    dispatch({ type: 'signup', payload: response.data.token });

    navigate('TrackList')
  } catch (err) {
    dispatch({type:'add_error', payload: 'Something went wrong with sign up'})
  }
}


const signin = (dispatch) => {
  return ({ email, password }) => {
    // api request for auth

    // authenticated

    // fails: error messages
  }
} 

const signout = (dispatch) => {
  return () => {

  }
}

export const { Provider, Context } = context(
  authReducer,
  { signin, signup, signout },
  { token: null, errorMessage:'' }
)