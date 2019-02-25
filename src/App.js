import React,{ Component,Fragment } from "react";
import store from "./store/index";
import { Button } from 'antd-mobile';
//引用路由
import {
    BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Axios from "axios";
import { actionCreators } from './store';
import { addChangeAction,handChangAction,delChangAction,initListAction,getList} from './store/actiocnCreators'

import List from "./List";
class Home extends Component {
    constructor(props){
        super(props);
        //store.getState()拿到store里面的数据
        this.state=store.getState();
        //感知store的变化 当数据变化的时候便重新去更新一次store的数据
        console.log(store.getState());
        store.subscribe(this.storeMonitor);
    }
    storeMonitor = () =>{
        this.setState(store.getState())
    };
    //使用ref操作demo 获取值
    // addChange = () =>{
    //     const action  = addChangeAction (this.input.value);
    //     store.dispatch(action);
    // }
    addChange = (e) =>{
        const action = addChangeAction (e.target.value);
        store.dispatch(action);
    };
    handChang = () =>{
        const action = handChangAction();
        store.dispatch(action);
    };
    delChang = (index) =>{
        const action = delChangAction (index);
        store.dispatch(action);
    };
    //判断是否按下了回车
    inputKeyDown = (e) =>{
        if (e.keyCode === 13){
            this.handChang()
        }
    };
    componentDidMount (){
        // 不用redux-thunk中间件的话就在页面请求 方法1
        //获取数据将数据存在store
        // var api ="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
        // Axios.get(api).then((res)=>{
        //     const data = res.data.result;
        //     const action = initListAction(data);
        //     store.dispatch(action);
        // },(err)=>{
        //     console.log(err)
        // })
        //方法二
        const action = getList();
        store.dispatch(action);
    }
    render(){
        const { list } = this.state;
        return(
            <Fragment>

                <Router >
                        <div>
                            <Route path="/List" component={List} />
                            <Link to="/List">账号激活</Link>
                        </div>
                </Router>
                <div className="login">
                    <input
                        placeholder="请输入账号"
                        onChange={this.addChange}
                        onKeyDown={this.inputKeyDown}
                        // ref={(input) =>{this.input = input}}
                    />
                    <Button
                        type="primary"
                        className="loginButton"
                        onClick={this.handChang}
                    >添加1</Button>
                    <ul>
                        {
                            list.map((item,index)=>(
                                <li key={index} onClick={this.delChang.bind(this,index)}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}
export default Home;