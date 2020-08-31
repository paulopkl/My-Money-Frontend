const INITIAL_STATE = { list: [] }

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED': {
            return { list: action.payload.data }
        }
        default: {
            return state
        }
    }
}

export default reducer;