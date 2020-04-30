import React from 'react';

class MyFormContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="BoxContent">{this.props.children}
                <div className="first-content">
                    <img className="sun" src={this.props.image}></img>
                </div>
                <div className="second-content">
                    <p className="Country">Serbia</p>
                    <h5 className="City">Belgrade</h5>
                    <p className="Temperature">Sunny 19°C</p>
                </div>

            </div>
        )
    }
};

export default MyFormContent
