/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-28 15:57:06
 * @LastEditors: benz1
 * @Reference:
 */

import React from "react";
import "./App.css";

/* APP 父组件  Son 子组件*/
class App extends React.Component {
    state = {
        message: "this is message",
        list: [1, 2, 3],
        userInfo: {
            name: "test",
            age: 18
        }
    };
    getMsg = () => {
        alert("this is 父元素函数");
    };
    render() {
        return (
            <div>
                {/* 在子组件身上绑定属性  名字可以自定义  保持语义化 */}
                <SonF msg={this.state.message} />
                <SonC
                    msg={this.state.message}
                    list={this.state.list}
                    userInfo={this.state.userInfo}
                    getMsg={this.getMsg}
                    child={
                        <div>
                            <p>this is p</p>
                        </div>
                    }
                />
            </div>
        );
    }
}

/* 函数式 Son */
// function SonF(props) {
//     /* props 是一个对象  里面存着通过父组件传入的所有数据 */
//     return <div>我是函数子组件吗,{props.msg}</div>;
// }

/* 参数结构 */
function SonF({ msg }) {
    /* props 是一个对象  里面存着通过父组件传入的所有数据 */
    return <div>我是函数子组件吗,{msg}</div>;
}

/* 类组件Son  */
class SonC extends React.Component {
    render() {
        const { msg, list, userInfo, getMsg, child } = this.props;
        /* 类组件必须通过this关键词获取 props名字是固定的 */
        return (
            <div>
                <div>我是类子组件,{msg}</div>
                <div>
                    {list.map((item) => (
                        <p key={item}>{item}</p>
                    ))}
                </div>
                <div>{userInfo.name}</div>
                <button onClick={getMsg}>点击相应父元素函数</button>
                {child}
            </div>
        );
    }
}
export default App;
