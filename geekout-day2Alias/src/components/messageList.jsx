import React from 'react';

class MessageList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="list-to-show">
                {this.props.list.map(el =>
                    <li className="list-item" key={el.id}>
                        <div>{el}</div>
                    </li>)}
            </ul>
        )

    }
}

export default MessageList