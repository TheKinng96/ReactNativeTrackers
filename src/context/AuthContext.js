import context from './context'

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const signup = (dispatch) => {
  return ({ email, password }) => {
    // api request for auth

    // authenticated

    // fails: error messages
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
  { isSignedIn: false }
)