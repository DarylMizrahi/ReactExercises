import React from 'react';
import ContentBoxOne from './Content-Box1'


class MyFormContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="all-Content">
                <div className="Boxes">
                    <ContentBoxOne></ContentBoxOne>
                </div>
                <div className="Boxes">
                    <ContentBoxOne></ContentBoxOne>
                </div>
                <div className="Boxes">
                    <ContentBoxOne></ContentBoxOne>
                </div>
            </div>
        )
    }
}

export default MyFormContent