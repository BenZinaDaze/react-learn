/*
 * @Description: 05-jsx-行内样式
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-24 16:47:45
 * @LastEditors: benz1
 * @Reference:
 */
/* style 行内样式 */
function App() {
    return (
        <div className="App">
            {/* 外层括号代表要写表达式
                内层括号代表是一个对象
             */}
            <div style={{ color: "blue" }}>行内样式测试！</div>
        </div>
    );
}

export default App;
