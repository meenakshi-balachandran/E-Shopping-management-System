import { initialAuthState } from "../context/AuthContext"
import { AuthorisationType } from "../enum/AuthorisationType"

export interface authAction {
  type:AuthorisationType,
  payload?:any
}


const AuthorisationReducer = (state: initialAuthState, action: authAction) : initialAuthState=> {
  switch(action.type) {
    case AuthorisationType.SIGN_IN : {
      return {
        isAuthenticated:true
      }
    }
    case AuthorisationType.SIGN_OUT : {
      return {
        isAuthenticated:false
      }
    }
    default : 
      return state
    
  }

}

export default AuthorisationReducer