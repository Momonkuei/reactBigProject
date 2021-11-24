import React, { Component } from 'react';
import '../css/style.css';
import { Modal, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

    class Trlist extends React.Component{
        render() {
            return (
                <div>
                    <tr>
                        <td>
                            <a href="#" data-bs-toggle="modal" data-bs-target="abc">
                                {this.props.newstitle}
                            </a>
                        </td>
                        <td>{this.props.newsdate}</td>
                    </tr>
                </div>
                    
            )
        }
    }
    class TrlistModel extends React.Component{
        render() {
            return (
                <div className="modal fade" id="abc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-body modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="abc">{this.props.newstitle}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {this.props.newsdesc}
                                </div>
                                <div className="row">
                                    <div className="col-md-4 ms-auto">{this.props.newsdate}</div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-project" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }
    }
    class VgtNewsModel extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                
                error: null,
                isLoaded: false,
                vgtNews:[
                        {
                        manangerid:11,
                        newstitle: "更新交易流程，迅速、安全、有保障",
                        newsdesc: "流民文自安家所年機長北士林告過！在黃道能謝港臺我影就時什？響東處過本的爾內理、到打雙但跟那爾的們性裡態是受這月旅？我我和質道。這有為下院男面，所上進，服風低如？發會可最子立也之臺久到成底質的都身持，形要一意。跑想極雄找營在了算。清男安石興形",
                        newsdate: "2021-09-09T09:55:03.000Z"
                        },
                        {
                        manangerid:12,
                        newstitle: "歡慶中秋，折扣免費送!",
                        newsdesc: "所上進，服風低如？發會可最子立也之臺久到成底質的都身持，形要一意。跑想極雄找營在了算。清男安石興形立地人，供夫求族有是亮是，小平主始和險，他了題情只感沒，大當雖注得。",
                        newsdate: "2021-09-11T02:55:23.000Z"
                        },
                        {
                        manangerid:13,
                        newstitle: "VGT寶物遊戲交易網上線啦!",
                        newsdesc: "官會而別格我腦銀中股入！大種大乎，才方金等車然東來地樹怎吃調重：權小告萬看，易夠法臺……來後人取經無之的，突名土，久子作感，最口達，紙行營。去都的馬一個，於統作不有、驗料注行。太班感事。",
                        newsdate: "2021-09-13T06:54:31.000Z"
                        }
                ]
            }
        }    
    
    
    render() { 
        // const width = {
        //     width:'14rem'
        // }
        const items= this.state;
                
                    return (
                        <div>
                            <div className="container w-75 mt-5 border-secondary">
                                <table className="table table-bordered table-hover">
                                    <thead className="bg-project">
                                        <tr>
                                            <th className="col-9">公告</th>
                                            <th className="col-3">更新日期</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.vgtNews.map((item, index) => (
                                            <div>
                                                <Trlist id={index} newstitle={item.newstitle} newsdate={ new Date(item.newsdate).toLocaleDateString()} />
                                                <TrlistModel id={index} newstitle={item.newstitle} newsdate={item.newsdate} newsdesc={item.newsdesc }/>
                                            </div>
                                        ))}
                                    </tbody>
                                </table>
                            </div>        
                        </div>
                        // <ul>
                            // {items.map(item => (
                            //     <li key={item.id}>
                            //         {item.name} {item.price}
                            //     </li>
                            // ))}
                        // </ul>
                    );
                
    }        
}
 
export default VgtNewsModel;