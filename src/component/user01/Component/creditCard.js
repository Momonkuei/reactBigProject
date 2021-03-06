import React, { Component } from 'react';
import axios from 'axios';
import '../css/creditCard.css';
import mastercard from '../img/mastercard.png';
import visa from '../img/visa.png';
import jcb from '../img/jcb.png';
import ok from '../img/OK.png';


class CreditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vgtid: '',
            vgtpoint: 0,
            vgtinput: 0,
        }
    }

    componentDidMount() {
        const vgtinput = this.props.match.params.vgtinput;
        this.setState({
            vgtinput: vgtinput,
        });

        axios.get("http://localhost:3000/Vgt/login").then(
            (response) => {
                this.setState({
                    vgtid: response.data[0].vgtid,
                    vgtpoint: response.data[0].vgtpoint,
                })
            });
    }


    submitNewCreditCard = (e) => {
        var vgtm = (this.state.vgtinput*1.4)+this.state.vgtpoint
        e.preventDefault();
        axios.post('http://localhost:3000/Vgt/creditCard', {
            vgtid:this.state.vgtid,
            vgtpoint: vgtm,
        });
        this.setState({})
        // console.log(vgtm);
        // console.log(this.state.vgtid);
        window.location.href = "http://localhost:8000/VGT/MemberPage/storeValue"
    }

    render() {
        console.log(this.state.vgtid);
        console.log(this.state.vgtinput);
        return (
            <div className="container">
                <div className="card-top cardTop border-bottom text-center"></div>
                <div className="card-body cardBody">
                    <br />
                    <div className="row m-0">
                        <div className="col-md-7">
                            <div className="myLeft">
                                <div className="row m-0"> <span className="myHeader">Payment</span>
                                    <div className="icons">
                                        <img src={visa} />
                                        <img src={mastercard} />
                                        <img src={jcb} />
                                    </div>
                                </div>
                                <form className="mt-3">
                                    <span className="spanText">??????????????????</span>
                                    <input placeholder="WANG DAMING" />
                                    <span className="spanText">??????????????????</span>
                                    <input placeholder="#### #### #### ####" />
                                    <div className="row m-0">
                                        <div className="col-4"><span className="spanText">?????????????????????</span> <input placeholder=" YY / MM" /> </div>
                                        <div className="col-4"><span className="spanText">??????????????????: </span> <input id="cvv" placeholder="cvv" /> </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="myRight">
                                <div className="myHeader">????????????</div>
                                <hr />
                                <div className="row myLower">
                                    <div className="col text-start">VGT</div>
                                    <div className="col text-end"><p id="vgtPoint">{this.state.vgtinput * 1.4}&nbsp;???</p></div>
                                </div>
                                <div className="row myLower">
                                    <div className="col text-start"><b>??????????????????</b></div>
                                    <div className="col text-end"><b id="vgtNt">NT$&nbsp;{this.state.vgtinput}</b></div>
                                </div>
                                <div className="row myLower">
                                    <button className="btn mBtn" data-bs-toggle="modal" data-bs-target="#payModal">????????????</button>
                                    <p className="text-muted text-center">??????????????????????????????</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade row" id="payModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header modalHeader">
                                <h3>????????????</h3>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body modalBody">
                                <div className="imgDiv">
                                    <img src={ok} alt="" />
                                    <br />
                                </div>
                                <div>
                                    <h3 className="modalBodyH3">?????????VGT????????????{this.state.vgtinput*1.4+this.state.vgtpoint}???</h3>
                                </div>
                                <div className="modal-footer modalFooter">
                                    <button type="button" className="btn" onClick={this.submitNewCreditCard} >??????</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreditCard;