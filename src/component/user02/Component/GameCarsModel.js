import React, { Component } from "react";
import {NavLink } from "react-router-dom";
import card1 from "../../user02/img/card1.jpg";
import card2 from "../img/card2.jpg";
import card3 from "../img/card3.jpg";
import card4 from "../img/card4.jpg";
import card5 from "../img/card5.png";
import card6 from "../img/card6.jpg";
import card7 from "../img/card7.jpg";
import card8 from "../img/card8.jpg";

class GameCarsModel extends Component{
    constructor(props) {
        super(props);
        this.state ={}
    }
    render() {
        return (
            <div>
                <h2 className="text-center">請選擇遊戲</h2>
                <div className="card-deck d-flex container row flex-row flex-nowrap overflow-auto">
                    <div className="card col-md-4 ">
                        <img src={card1} height="200" width="100%" className="card-img-top" alt="英雄聯盟"/>
                    </div>
                    <div className="card col-md-4">
                        <NavLink to="/VGT/ProductSearchPage"><img src={card2} height="200" width="100%" className="card-img-top" alt="楓之谷"/></NavLink>
                    </div>
                    <div className="card col-md-4">
                    <img src={card3} height="200" width="100%" className="card-img-top" alt="Ro"/>
                    </div>
                    <div className="card col-md-4">
                    <img src={card4} height="200" width="100%" className="card-img-top" alt="魔獸世界"/>
                    </div>
                    <div className="card col-md-4">
                    <img src={card5} height="200" width="100%" className="card-img-top" alt="天堂M"/>
                    </div>
                    <div className="card col-md-4">
                    <img src={card6} height="200" width="100%" className="card-img-top" alt="希望"/>
                    
                    </div>
                    <div className="card col-md-4">
                    <img src={card7} height="200" width="100%" className="card-img-top" alt="Aion"/>
                    
                    </div>
                    <div className="card col-md-4">
                    <img src={card8} height="200" width="100%" className="card-img-top" alt="GT5"/>
                    
                    </div>
                </div>
                
            </div>
            
        ) 
        
    }
    
}

export default GameCarsModel;