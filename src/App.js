import React, { Component } from "react";
import 'bootstrap';
import Header from '../src/component/header/header';
import Footer from '../src/component/footer/footer';
import BodyRouter from '../src/component/body/bodyRouter';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <React.Fragment>
            <div className="container">
                <div>
                    <Header/> 
                </div>
                <br/>
                <div>
                    <BodyRouter/>                     
                </div>
                <br/>                                                           
            </div>
            <div>
                <Footer/>
            </div>                                    
        </React.Fragment>         
        );
    }
}

export default App;
