/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-24 16:41:48
 * @LastEditors: benz1
 * @Reference:
 */

function getH(state) {
    if (state === 1) {
        return <h1>this is h1!</h1>;
    } else {
        return <h2>this is h2!</h2>;
    }
}

function App() {
    return (
        <div className="App">
            {getH(1)}
            {getH(2)}
        </div>
    );
}

export default App;
