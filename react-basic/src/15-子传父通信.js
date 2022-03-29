/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-29 14:05:46
 * @LastEditors: benz1
 * @Reference:
 */

import React from "react";
import "./App.css";

/* APP 父组件  Son 子组件
   父传子 props 函数
   子传父 子组件调用父组件传递过来的函数,并且把想要传递的数据当成函数的实参
*/
class App extends React.Component {
    state = {
        list: [1, 2, 3]
    };
    /* 1.准备一个函数  传给子组件 */
    getSonMsg = (msg) => {
        alert(msg);
    };
    render() {
        return (
            <div>
                <Son getSonMsg={this.getSonMsg}></Son>
            </div>
        );
    }
}

function Son({ getSonMsg }) {
    return (
        <div>
            我是函数子组件
            <button onClick={() => getSonMsg("来自子组件种的数据")}>click</button>
        </div>
    );
}

export default App;
