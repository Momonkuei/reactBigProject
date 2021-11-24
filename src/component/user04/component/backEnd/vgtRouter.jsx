import { Switch, Route, Redirect} from 'react-router-dom';
import Member from './vgtMember.jsx';
import Appeal from './vgtAppeal.js';
import AppealRply from './vgtAppealRply.jsx';
import News from './vgtNews.jsx';
import Order from './vgtOrder.jsx';
import OrderCmmt from './vgtOrderCmmt.jsx';
import Product from './vgtProduct.jsx';
import ProductCmmt from './vgtProductCmmt.jsx';



const Router = () => (

    <Switch>
        <Route exact path='/vgt/vgtMember' component={Member}></Route>
        <Route exact path='/vgt/vgtAppeal' component={Appeal}></Route>
        <Route exact path='/vgt/vgtAppealRply' component={AppealRply}></Route>
        <Route exact path='/vgt/vgtNews' component={News}></Route>
        <Route exact path='/vgt/vgtOrder' component={Order}></Route>
        <Route exact path='/vgt/vgtOrderCmmt' component={OrderCmmt}></Route>
        <Route exact path='/vgt/vgtProduct' component={Product}></Route>
        <Route exact path='/vgt/vgtProductCmmt' component={ProductCmmt}></Route>
    </Switch>
)











export default Router;