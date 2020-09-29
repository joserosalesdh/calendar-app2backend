import { types } from "../types/types";



const initialState = {
    checking: true, //porngo true porque cuando la app se carga necesito vereficar que el usuario este autenticado previamente y si no esta autenticado lo tengo que mandar al login y si esta autenticado tengo que mantenerlo en la patalla que el esta solicitando
    // uid: null,
    // name: null
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }

        default:
            return state;
    }

};