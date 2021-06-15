const { combineReducers } = require("redux");

const initialGlobalReducer = {
    isLogin:false,
    dataUSer:{}
}

function LoginReducer (state=initialGlobalReducer,action){
    if(action.type === "SET_LOGIN"){
        return ({
            ...state,
            [action.inputType]: action.inputValue   
        })
    }
    return state;
}

const reducer = combineReducers({
    LoginReducer,
})

export default reducer

