const userKey = '_mymoney_user';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    // { name:'Teste', email:'aluno@cod3r.com.br' }, 
    validToken: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED': {
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey);
                return { ...state, validToken: false, user: null }
            }
        }
        case 'USER_FETCHED': {
            localStorage.getItem(userKey, JSON.stringify(action.payload));
            return { ...state, user: action.payload, validToken: true }
        }
        default: {
            return state;
        }
    }
}

export default reducer;