import data from '../../utilities/data.json'
export function getLoged() {
    return function (dispatch) {
          dispatch({
            type: "GET_LOGED",
            payload: true,
          });
       
       
    };
  }


  export function getUsuarios() {
    return function(dispatch) {
        dispatch({
            type: "GET_USERS",
            payload: data.usuarios,
          });
    }
  }
  export function getUsuariosFiltro(id) {
    if (id == 0) { 
        return function(dispatch) {
            dispatch({
                type: "GET_USERS",
                payload: data.usuarios,
              });
        }
    }
    let usus = data.usuarios.filter(e => e.codemp == id)
    console.log(usus)
    return function(dispatch) {
        dispatch({
            type: "GET_USERS_FILTRO",
            payload: usus,
          });
    }
  }
  export function getEmpresas() {
    return function(dispatch) {
        dispatch({
            type: "GET_EMPRESAS",
            payload: data.empresas,
          });
    }
  }