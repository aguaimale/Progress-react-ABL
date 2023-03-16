const initialState = {
    loged: false,
    usuarios: [],
    empresas: [{ "cod-emp": 99, "nom-emp": "Seleccione" }],
    uDetail: {},
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
            if (state.empresas.length <= 1) {
                return {
                    ...state,
                    empresas: [...state.empresas, ...action.payload]
                }      
            }
            case "GET_USER_DETAILS":
                
                if (action.payload == "Usuario no encontrado") {
                    return {
                        ...state, 
                        uDetail: {usu: "NO ENCONTRADO", psw: "NO", codemp: "NO"}
                    }
                }
                return{
                    ...state,
                    uDetail:action.payload

                }
                case "GET_CLEAN":
                    return{
                        ...state,
                        uDetail: action.payload,
                    }
        default:
            return state;
    }
}


export default reducer;