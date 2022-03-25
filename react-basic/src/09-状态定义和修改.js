/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-25 13:24:39
 * @LastEditors: benz1
 * @Reference:
 */

import React from "react";
import "./App.css";
/* 组件状态 */
class TestComponent extends React.Component {
    /* 1. 定义组件状态 */
    state = {
        /* 在这里可以定义各种属性，全都是当前组件状态 */
        name: "test"
    };
    changeName = () => {
        /* 3. 修改state中的状态
            注意：不可以直接赋值修改，必须通过set方法 */
        this.setState({
            name: "test1"
        });
    };

    render() {
        /* 2. 使用状态 */
        return (
            <div>
                this is TestComponent 当前name为:{this.state.name}
                <button onClick={this.changeName}>修改name</button>
            </div>
        );
    }
}
/* 
    1. 编写组件其实就是编写原生js类或者函数
    2. 定义状态必须通过state实例属性的方法 提供一个对象 名字是固定的state
    3. 修改state中的任何属性 都不能直接赋值 必须走setState方法,方法来自继承
    4. 这里的this 关键词 很容易出现指向错误的问题
 */
function App() {
    return (
        <div className="App">
            <TestComponent />
        </div>
    );
}

export default App;
