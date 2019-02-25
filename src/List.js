import React, { Component,Fragment }  from "react";
//引用页面

import { actionCreators } from './store';
import store from "./store";

class List extends Component{

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
    render(){
        const { list } = this.state;
        return(
            <Fragment>
                <h1>1</h1>
                <ul>
                    {
                        list.map((item,index)=>(
                            <li key={index}>{item.title}</li>
                        ))
                    }
                </ul>
            </Fragment>
        )
    }

    componentDidMount(){
    }
    componentWillUnmount() {
    }

    componentDidUpdate(){

    }

}
export default List;