export const initialState = {
    loading: false,
    users : [],
    error : ''
}
 export const reducer = (state = initialState, action)=>{

    switch(action.type){

        case 'USER_REQUEST': return{
            ...state,
            loading:true
        }

        case 'USER_SUCCESS': return{
            ...state,
            loading:false, users: action.payload, error:''
        }
        
        case 'USER_ERROR' :return{
            ...state,
            loading:false, users:[], error:action.payload
        }

        default : return state;
    }

}
