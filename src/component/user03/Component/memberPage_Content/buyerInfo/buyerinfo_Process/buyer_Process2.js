import React, { Component } from 'react';
import Dealer from '../../../../../user05/Component/buyer/buyerInTrade_dealer';
import Character from '../../../../../user05/Component/buyer/buyerinTrade_charac';
import axios from 'axios';
class Process2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productinfo: []
        }
    }

    componentDidMount() {
        // 從tradeBuyOrder.js的NavLink path 抓取 orderid => this.props.match.params.orderid 
        // 以此為篩選條件從後端SQL撈資料 => 將資料透過props傳給子層
        axios.get(`http://localhost:3000/Vgt/memberPage/buyer/tradeprocess/${this.props.match.params.orderid}`)
            .then(
            (response) => {
                this.setState({ productinfo: response.data })
            }).catch(
                (err) => console.log(err)
            )
    }

    render() {
        return (
            <div>
                <Dealer productinfo={this.state.productinfo} orderid={this.props.match.params.orderid} />
                <Character productinfo={this.state.productinfo} orderid={this.props.match.params.orderid} />
            </div>
        );
    }
}

export default Process2;