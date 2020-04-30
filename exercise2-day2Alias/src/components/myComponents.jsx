import React from 'react'
import Checkbox from './parent';

class Alive extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: false }

    }

    componentDidMount() {
        alert("I'm alive!")
    }
    render() {
        return (
            //<h1>Daryl's World</h1>
            <h1 className="title">Congrats for checking the box!</h1>
        )
    }
}

export default Alive