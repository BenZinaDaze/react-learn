/*
 * @Description: 03-jsx-条件渲染
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-24 11:49:37
 * @LastEditors: benz1
 * @Reference:
 */

const flag = true;

function App() {
    return (
        <div className="App">
            {flag ? "vue" : "react"}
            <br />
            {flag ? (
                <div>
                    <div>header</div>
                    <div>main</div>
                    <div>footer</div>
                </div>
            ) : (
                "loading"
            )}
        </div>
    );
}

export default App;
