import React from 'react';

class NavbarContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Navbar">{this.props.children}
                <div className="NavbarChild1">
                    <a className="NavbarText">{this.props.name1}</a>
                    <a className="NavbarText">{this.props.name2}</a>
                    <a className="NavbarText">{this.props.name3}</a>
                </div>
                <div>
                    <img className="NavbarLogo" src={this.props.image}></img>
                </div>
            </div>
        )
    }
}

export default NavbarContent