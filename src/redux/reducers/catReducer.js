const initialState = {
    loading: false,
    category: [],
    error:''
}

export const catReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_CAT_REQUEST' :
            return {
                ...state,
                loading:true
            }
        case 'FETCH_CAT_SUCCESS' :
            return {
                loading:false,
                category:action.payload,
                error:''
            } 
        case 'FETCH_CAT_FAILURE' :
                return {
                    loading:false,
                    category:[],
                    error:action.payload
                }

        default:
            return state        

    }
}