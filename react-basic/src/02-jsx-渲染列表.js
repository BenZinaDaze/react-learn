/*
 * @Description: 02-jsx-渲染列表
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-24 11:47:11
 * @LastEditors: benz1
 * @Reference:
 */

let list = [
    { id: 1101, name: "vue" },
    { id: 1102, name: "react" }
];
/* 完成列表遍历 map */
/* 在map方法的回调函数中 返回想要重复渲染的内容(标签) */
/* item拿到数组中的每一项 然后通过再次使用{} 渲染具体内容 */
/* 同样需要加一个独一无二不可重复类型为字符串或number的key */
/* 这个key不会出现在真实的dom中 只是为了配合diff算法 */
function App() {
    return (
        <div className="App">
            {list.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </div>
    );
}

export default App;
