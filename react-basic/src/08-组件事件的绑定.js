/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-25 13:09:05
 * @LastEditors: benz1
 * @Reference:
 */

import React from "react";
import "./App.css";

/* 函数组件事件绑定*/
function HelloComponent() {
    const clickHandler = (e) => {
        console.log(`this is fn click event`, e);
    };
    return <div onClick={clickHandler}>hello!</div>;
}

/* 类组件事件绑定*/
class HelloC extends React.Component {
    clickHandler = (e) => {
        console.log(`this is class click event`, e);
    };
    render() {
        return <div onClick={this.clickHandler}>tihs is class component!</div>;
    }
}
function App() {
    const clickHandler = () => {
        console.log(`this is click event`);
    };
    return (
        <div className="App">
            <button onClick={clickHandler}>点击</button>
            <br />
            <HelloC />
            <HelloComponent />
        </div>
    );
}

export default App;
