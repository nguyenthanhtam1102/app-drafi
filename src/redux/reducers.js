const initialState = {
    userData:[]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'Set_User':return {
            ...state,
            userData: action.payload,
        }
        default: return state;
    }
}

export default reducer;