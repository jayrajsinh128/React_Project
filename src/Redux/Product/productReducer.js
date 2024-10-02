import { ERROR, LOADING, SUCCESS } from "./actionType"


let initial = {
    product : [],
    isLoading : false,
    isError : false,
    isadded : false,
}


export const proReducer = (state = initial,action)=>{
      switch(action.type){
          case LOADING:
              return {
                ...state,
                isLoading : true,
              }
           case  SUCCESS:
               return {
                  ...state,
                  isLoading : false,
                  product : action.payload
               }   
            case ERROR:
                 return {
                    ...state,
                    isLoading : false,
                    isError : true
                 }   
            case "ADDEDSUCCESS" : 
                return {
                    ...state,
                    isLoading : false,
                    isadded : true
                }     
            default : return state     
      }
}