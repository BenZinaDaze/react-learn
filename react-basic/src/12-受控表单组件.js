/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-25 15:54:11
 * @LastEditors: benz1
 * @Reference:
 */

import React from "react";
import "./App.css";

class InputComponent extends React.Component {
    /* 1. 声明用来控制input value的react组件自己的状态  */
    state = {
        message: "this is message"
    };
    inputChange = (e) => {
        /* 4. 拿到输入框最新的值 交给state中的message */
        this.setState({
            message: e.target.value
        });
    };
    render() {
        return (
            /* 
                2. 给input框的value属性绑定 react state
                3. 给input框绑定一个change的事件，为了拿到当前输入框中的数据
             */
            <div>
                <input type="text" value={this.state.message} onChange={this.inputChange} />
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <InputComponent />
        </div>
    );
}

export default App;
