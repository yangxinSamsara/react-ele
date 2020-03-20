import * as types from '../constants/loginType'

const initState = {
    loginData: null,
    loginError: null
}

export default function loginReducer(state = initState, action) {
    switch (action.type) {
        case types.GET_LOGIN_SUCCESS:
            return {
                ...state,
                loginData: action.loginData.data
            }

        case types.GET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError.data
            }

        default:
            return state
    }
}