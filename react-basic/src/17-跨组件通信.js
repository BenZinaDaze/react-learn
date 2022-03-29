/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-29 14:57:01
 * @LastEditors: benz1
 * @Reference:
 */

import React, { createContext } from "react";
import "./App.css";

/* 可以设置默认值 */
const { Provider, Consumer } = createContext({
    message: "default message",
    person: {
        name: "default message name",
        age: 20
    }
});
/* 
    APP->A->B  B是A的子组件  A是APP的子组件
    APP的数据直接传给B
*/
class App extends React.Component {
    state = {
        message: "this is message form app",
        person: {
            name: "i am app",
            age: 18
        }
    };
    render() {
        return (
            /* 使用Provider包裹根组件 */
            <Provider value={this.state}>
                <div>
                    <SonA></SonA>
                </div>
            </Provider>
        );
    }
}

function SonA() {
    return (
        <div>
            我是APP的子组件A
            <SonB />
        </div>
    );
}
function SonB() {
    return (
        <div>
            我是A的子组件B
            {/*  通过Consumer 使用数据*/}
            <Consumer>{(value) => <span> {value.message}</span>}</Consumer>
            <br />
            <Consumer>{(value) => <span> {value.person.name}</span>}</Consumer>
        </div>
    );
}

export default App;
