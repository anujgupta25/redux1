const Default_State = {
    Authenticated : false,
    user_info :{
        name : null
    },
    error:''
}

export const auth_reducer = (state=Default_State, action)=>{

    switch(action.type){

       case "AUTH_USER" : return{
           ...state,
           user_info : action.payload
       }
       case "AUTH_ERROR" : return{
        ...state,
        error : action.payload
       }

       default : return state;
    }
}