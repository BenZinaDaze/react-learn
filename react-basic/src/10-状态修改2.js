/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-25 14:12:39
 * @LastEditors: benz1
 * @Reference:
 */

import React from "react";
/* 通过类组件修改状态的方式 */
class Counter extends React.Component {
    /* 1. 定义组件状态 */
    state = {
        /* 在这里可以定义各种属性，全都是当前组件状态 */
        count: 0
    };
    changeCount = () => {
        /* 3. 修改state中的状态
            注意：不可以直接赋值修改，必须通过set方法 */
        this.setState({
            /* react体系下  数据不可变(不可直接赋值修改,只能通过set方法)
               value 永远都是上一次count的值
            */
            count: this.state.count + 1
        });
    };

    render() {
        /* 2. 使用状态 */
        return (
            <div>
                <button onClick={this.changeCount}>{this.state.count} Click</button>
            </div>
        );
    }
}
function App() {
    return (
        <div className="App">
            /* 渲染 */
            <Counter />
        </div>
    );
}

export default App;
