import React from 'react';
import ArrowLogo from '../images/Arrow-logo.png'

class BoxOneContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Arrow-logo-Box">
                <img className="Arrow-logo" src={ArrowLogo}></img>
                <div className="Title">
                    <h1>Waiting for the OTP</h1>
                </div>
            </div>
        )
    }
}

export default BoxOneContent