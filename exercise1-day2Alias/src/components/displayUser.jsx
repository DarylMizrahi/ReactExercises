import React from "react"
import UserList from './userList'

function show(props) {
    return (
        <ul className="list-to-show">
            {UserList.map(el =>
                <li className="list-item" key={el.id}>
                    <div>{el.first_name}</div>
                    <div>{el.email}</div>
                    <div>{el.country}</div>
                </li>)}
        </ul>
    )
}

export default show