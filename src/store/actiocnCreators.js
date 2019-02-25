import {ADD_CHANGE_VALUE, ADD_HAND_CHANGE, DEL_CHANGE,INIT_LIST_ACTION,} from "./actionTypes";
import Axios from "axios";

export const addChangeAction = (value) => ({
    type:ADD_CHANGE_VALUE,
    value
});
export const handChangAction = () => ({
    type:ADD_HAND_CHANGE,
});
export const delChangAction = (index) => ({
    type:DEL_CHANGE,
    index
});

//派发数据
export const initListAction = (data) => ({
    type:INIT_LIST_ACTION,
    data
});
//用redux-thunk的话请求放在action里面  方法2
// export const getList = () =>{
//      return (dispatch) =>{
//          //获取数据将数据存在store
//          var api ="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
//          Axios.get(api).then((res)=>{
//              const data = res.data.result;
//              const action = initListAction(data);
//              dispatch(action);
//          },(err)=>{
//              console.log(err)
//          })
//      }
// }