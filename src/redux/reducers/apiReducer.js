const initialState = {
    loading: false,
    products: [],
    error:''
}

export const apiReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USERS_REQUEST' :
            return {
                ...state,
                loading:true
            }
        case 'FETCH_USERS_SUCCESS' :
            return {
                loading:false,
                products:action.payload,
                error:''
            } 
        case 'FETCH_USERS_FAILURE' :
                return {
                    loading:false,
                    products:[],
                    error:action.payload
                }

        default:
            return state        

    }
}