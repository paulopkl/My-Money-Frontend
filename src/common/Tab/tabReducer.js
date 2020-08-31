const INITIAL_STATE = { selected: '', visible: {} };

const tabReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED': {
            return { ...state, selected: action.payload }
        }
        case 'TAB_SHOWED': {
            return { ...state, visible: action.payload }
        }
        default: {
            return state
        }
    }
}

export default tabReducer;