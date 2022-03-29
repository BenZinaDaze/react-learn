/*
 * @Description:
 * @Author: benz1
 * @Date: 2022-03-24 10:10:50
 * @LastEditTime: 2022-03-29 15:44:53
 * @LastEditors: benz1
 * @Reference:
 */

import React from "react";
import "./App.css";

class App extends React.Component {
    state = {
        list: [
            { id: 1, name: "name1", price: 18.8, info: "name is name1" },
            { id: 2, name: "name2", price: 18.8, info: "name is name2" },
            { id: 3, name: "name3", price: 18.8, info: "name is name3" }
        ]
    };
    delfn = (id) => {
        this.setState({
            list: this.state.list.filter((item) => {
                return item.id !== id;
            })
        });
    };
    render() {
        return (
            /* 使用Provider包裹根组件 */
            <div>
                {this.state.list.map((item) => {
                    return <ListItem item={item} key={item.id} delfn={this.delfn}></ListItem>;
                })}
            </div>
        );
    }
}

function ListItem({ item, delfn }) {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.info}</p>
            <button onClick={() => delfn(item.id)}>删除</button>
        </div>
    );
}

export default App;
