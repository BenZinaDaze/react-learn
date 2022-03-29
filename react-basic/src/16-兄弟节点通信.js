/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-29 14:21:03
 * @LastEditors: benz1
 * @Reference:
 */

import React from "react";
import "./App.css";

/* APP 父组件  Son 子组件
   1. 先把B传给父
   2. 再把父传给A
*/
class App extends React.Component {
    state = {
        message: ""
    };
    /* 准备一个函数  接受B的MSG */
    getSonMsg = (msg) => {
        this.setState({
            message: msg
        });
    };
    render() {
        return (
            <div>
                <SonA sendMsg={this.state.message} />
                <SonB getSonMsg={this.getSonMsg} />
            </div>
        );
    }
}

function SonA({ sendMsg }) {
    return <div>{sendMsg === "" ? "我是A子组件" : sendMsg}</div>;
}
function SonB({ getSonMsg }) {
    const msg = "来自B组件的信息";
    return (
        <div>
            我是B子组件
            <button onClick={() => getSonMsg(msg)}>this is B</button>
        </div>
    );
}

export default App;
