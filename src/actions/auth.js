import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2';



export const startLogin = (email, password) => {
    return async (dispatch) => {

        try {
            const resp = await fetchSinToken('auth', { email, password }, 'POST');
            const body = await resp.text();

            if (body.ok) {
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime()); // Tengo dos horas para que el token viva

                dispatch(login({
                    uid: body.uid,
                    name: body.name
                }))
            } else {
                Swal.fire('Error', body.msg, 'Error')
            }
        } catch (error) {
            console.log(error)
        }

    }
};

export const startRegister = (email, password, name) => {
    return async (dispatch) => {

        try {
            const resp = await fetchSinToken('auth/new', { email, password, name }, 'POST');
            const body = await resp.text();

            if (body.ok) {
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime()); // Tengo dos horas para que el token viva

                dispatch(login({
                    uid: body.uid,
                    name: body.name
                }))
            } else {
                Swal.fire('Error', body.msg, 'Error')
            }
        } catch (error) {
            console.log(error)
        }



    }
}

export const startChecking = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('auth/renew');
            const body = await resp.text();

            if (body.ok) {
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime()); // Tengo dos horas para que el token viva

                dispatch(login({
                    uid: body.uid,
                    name: body.name
                }))
            } else {
                dispatch(checkingFinish());
            }
        } catch (error) {
            console.log(error)
        }




    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish })

const login = (user) => ({
    type: types.authLogin,
    payload: user
})