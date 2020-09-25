


const initialState = {
    checking: true, //porngo true porque cuando la app se carga necesito vereficar que el usuario este autenticado previamente y si no esta autenticado lo tengo que mandar al login y si esta autenticado tengo que mantenerlo en la patalla que el esta solicitando
    // uid: null,
    // name: null
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {


        default:
            return state;
    }

}