/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-24 17:02:18
 * @LastEditors: benz1
 * @Reference:
 */

// 类名控制
// 1. 新增一个css文件
// 2. 在当前的app.js中导入这个样式文件 让它生效
// 3. 通过className 指定绑定的类名

import "./App.css";

const isRed = true;
function App() {
    return (
        <div className="App">
            <div className="test">类名测试！</div>
            <div className={isRed ? "pro" : "test"}>动态类名测试!</div>
        </div>
    );
}

export default App;
