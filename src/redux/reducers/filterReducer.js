const initialState = {
    loading: false,
    id: [],
    error:''
}

export const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_FILTER_REQUEST' :
            return {
                ...state,
                loading:true
            }
        case 'FETCH_FILTER_SUCCESS' :
            return {
                loading:false,
                id:action.payload,
                error:''
            } 
        case 'FETCH_FILTER_FAILURE' :
                return {
                    loading:false,
                    id:[],
                    error:action.payload
                }

        default:
            return state        

    }
}

