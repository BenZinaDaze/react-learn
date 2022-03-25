/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-25 16:06:34
 * @LastEditors: benz1
 * @Reference:
 */

import React, { createRef } from "react";
import "./App.css";

class InputComponent extends React.Component {
    /* msgRef 名字可以自定义 */
    msgRef = createRef();
    change = () => {
        /* 通过current.value 获取值 */
        console.log(this.msgRef.current.value);
    };
    render() {
        return (
            <div>
                <input type="text" ref={this.msgRef} onChange={this.change} />
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
