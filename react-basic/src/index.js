/*
 * @Description: 
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-24 10:36:51
 * @LastEditors: benz1
 * @Reference: 
 */

// 依赖两个最关键的核心包
// react: react框架核心代码
// react-dom: 完成渲染挂载的核心代码
import React from "react";
import ReactDOM from "react-dom";
// 根组件App
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
