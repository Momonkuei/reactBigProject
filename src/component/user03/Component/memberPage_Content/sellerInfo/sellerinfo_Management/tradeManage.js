import React, { Component } from 'react';
import Modal from '../../../../../modal/modal';


// 這頁抓在架上的product
class TradeManage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <table class="table table-hover">
                <thead>
                        <tr>
                            <th scope="col">商品編號</th>
                            <th scope="col">遊戲名稱</th>
                            <th scope="col">遊戲伺服器</th>
                            <th scope="col">商品種類</th>
                            <th scope="col" className="text-center">操作</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        <tr>                           
                            <th scope="row">No.4565135</th>                            
                            <td>楓之谷</td>
                            <td>雪吉拉</td>
                            <td>道具</td>
                            <td className="d-flex justify-content-evenly">                                
                                <a className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">修改商品</a>                                
                            </td>                                                      
                        </tr>
                    </tbody>
                </table> 
                <Modal/>            
            </React.Fragment>
         );
    }
}
 
export default TradeManage;