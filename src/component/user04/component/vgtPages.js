import React, { Component } from 'react';
import Nav from './backEnd/vgtNav';



class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <React.Fragment>               
                    <Nav/>                
            </React.Fragment>
        );
    }
}

export default Pages;
