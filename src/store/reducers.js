import {ADD_CHANGE_VALUE, ADD_HAND_CHANGE, DEL_CHANGE,INIT_LIST_ACTION} from './actionTypes'
const defaultStore = {
  list:[],
  inputValue:"",
};
export default  (state=defaultStore,action) =>{

    if (action.type === ADD_CHANGE_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
              newState.inputValue = action.value;
              return newState;
    }
    if (action.type === ADD_HAND_CHANGE){
        const newState = JSON.parse(JSON.stringify(state));
              newState.list.push(newState.inputValue);
              newState.inputValue="";
              return newState;
    }
    if (action.type === DEL_CHANGE){
        const newState = JSON.parse(JSON.stringify(state));
              newState.list.splice(action.index,1);
              return newState;
    }
    //将list更换成请求过来的数据
    if (action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
              newState.list = action.data;
              return newState;
    }
    return state;
}