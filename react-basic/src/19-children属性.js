/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-29 16:14:01
 * @LastEditors: benz1
 * @Reference:
 */

import React from "react";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            /* 使用Provider包裹根组件 */
            <div>
                <ListItem>
                    {/* 添加子元素 自动添加children属性 多个采用数组形式 */}
                    <div>this is childrn1</div>
                    <div>this is childrn2</div>
                    {() => {
                        console.log(123);
                    }}
                </ListItem>
            </div>
        );
    }
}

function ListItem({ children }) {
    children[2]();
    return (
        <div>
            {children[0]}
            {children[1]}
        </div>
    );
}

export default App;
