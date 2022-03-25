/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-25 11:01:00
 * @LastEditors: benz1
 * @Reference:
 */

import React from "react";
import "./App.css";

/* 函数组件的创建和渲染 */
/* 写一个首字母大写的函数 然后再函数体涨return出去UI的结构（jsx） */
function HelloComponent() {
    return <div>hello!</div>;
}

/* 类组件class */
class HelloC extends React.Component {
    /* 必须提供一个render方法
       在这个方法中return UI结构 */
    render() {
        return <div>tihs is class component!</div>;
    }
}
function App() {
    return (
        <div className="App">
            <HelloComponent />
            <HelloComponent></HelloComponent>
            <HelloC />
            <HelloC></HelloC>
        </div>
    );
}

export default App;
