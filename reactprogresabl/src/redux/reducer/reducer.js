const initialState = {
    loged: false,
    usuarios: [],
    empresas: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_LOGED":
            return {
                ...state,
                loged: action.payload
            }
        case "GET_USERS":
            return {
                ...state,
                usuarios: action.payload
            }
            case "GET_USERS_FILTRO":
            return {
                ...state,
                usuarios: action.payload
            }
            case "GET_EMPRESAS":
            return {
                ...state,
                empresas: action.payload
            }
        default:
            return state;
    }
}


export default reducer;