import React, { Component } from 'react';
import { NavLink, Route, Redirect,BrowserRouter,Switch } from 'react-router-dom';
import '../../../user03/css/style03.css';
import Member from './vgtMember';
import Order from './vgtOrder';
import OrderCmmt from './vgtOrderCmmt';
import Product from './vgtProduct';
import ProductCmmt from './vgtProductCmmt';
import Appeal from './vgtAppeal.jsx';
import AppealRply from './vgtAppealRply';
import News from './vgtNews';



class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
<BrowserRouter>
<div className="container ">
                <nav aria-label="Page navigation" className=" border-bottom">
                    <ul className="pagination  nav-fill  bg-project">
                        <li className="nav-item bg-project">
                            <NavLink className="nav-link page-link" to="/vgt/vgtMember">會員資料</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" to="/vgt/vgtOrder">訂單資料</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" to="/vgt/vgtOrderCmmt">訂單留言</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" to="/vgt/vgtProduct">商品資料</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" to="/vgt/vgtProductCmmt">商品留言</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" to="/vgt/vgtAppeal">申訴資料</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" to="/vgt/vgtAppealRply">申訴回覆</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" to="/vgt/vgtNews">公告資料</NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/vgt/vgtPages">
                    <Redirect to="/vgt/vgtMember"></Redirect>
                    </Route>
                    <Route path="/vgt/vgtMember" component={Member}></Route>
                    <Route path="/vgt/vgtOrder" component={Order}></Route>
                    <Route path="/vgt/vgtOrderCmmt" component={OrderCmmt}></Route>
                    <Route path="/vgt/vgtProduct" component={Product}></Route>
                    <Route path="/vgt/vgtProductCmmt" component={ProductCmmt}></Route>
                    <Route path="/vgt/vgtAppeal" component={Appeal}></Route>
                    <Route path="/vgt/vgtAppealRply" component={AppealRply}></Route>
                    <Route path="/vgt/vgtNews" component={News}></Route>
                    </Switch>
            </div>
</BrowserRouter>
           

        );
    }
}

export default Nav;