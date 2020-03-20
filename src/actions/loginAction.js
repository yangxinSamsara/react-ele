import *as types from '../constants/loginType'

export function getLoginSuccess(loginData) {
    return {
        type: types.GET_LOGIN_SUCCESS,
        loginData
    }
}

export function getLoginError(loginData) {
    return {
        type: types.GET_LOGIN_ERROR,
        loginData
    }
}