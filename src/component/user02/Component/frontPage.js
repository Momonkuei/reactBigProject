import React, { Component } from 'react';
import '../css/style.css';
import { NavLink } from 'react-router-dom';
import VgtNewsModel from '../Component/VgtNewsModel';
import GameCarsModel from './GameCarsModel';
import ProductModel from './ProductModel';


    class Frontpage extends Component {
        constructor(props) {
        super(props);
        this.state = {  }
    }      
    
    render() { 
        // const width = {
        //     width:'14rem'
        // }
        return ( 
            <div>
                <div>
                    <form className="row gx-3 gy-2 justify-content-center">
                        <div className="col-sm-3">
                            <label className="visually-hidden" for="choseGame">choseGame</label>
                            <select className="form-select" id="choseGame">
                                <option selected>選擇遊戲</option>
                                <option value="1">楓之谷</option>
                                <option value="2">英雄聯盟LOL</option>
                                <option value="3">天堂M</option>
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <label className="visually-hidden" for="choseSever">choseSever</label>
                            <select className="form-select" id="choseSever">
                                <option selected>全伺服器</option>
                                <option value="sever1">艾麗亞</option>
                                <option value="sever2">普力特</option>
                                <option value="sever3">琉德</option>
                            </select>
                        </div>
                        <div className="col-sm-2">
                            <label className="visually-hidden" for="choseType">choseType</label>
                            <select className="form-select" id="choseType">
                                <option defaultValue>物品種類</option>
                                <option value="gameMoney">遊戲幣</option>
                                <option value="props">道具</option>
                                <option value="gameAccount ">帳號</option>
                                <option value="3">代練</option>

                            </select>
                        </div>
                        <div className="col-sm-2">
                            <label className="visually-hidden" for="specificSizeInputName">Name</label>
                            <input type="text" className="form-control" id="specificSizeInputName" placeholder="標題關鍵字搜尋"/>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/VGT/ProductSearchPage"><button type="submit" className="btn btn-project" >搜尋</button></NavLink>
                        </div>
                    </form>
                </div>
                <section className=" text-center mt-5">
                    <h4>創新、便利、安全的虛擬交易，就在VGT！</h4>
                </section>
                <div style={{ width: '100%', height: '50px'}}></div>

                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-07/0ccd6760-9c77-11e9-8f7b-5d95d434c699" className="d-block mx-auto" alt="..."/>
                        </div>
                    </div>
                </div>
                <VgtNewsModel />
                <GameCarsModel />
                {/* <ProductModel /> */}
                <br/>
                <br/>
                            
            </div>
            
        );
    }        
}
 
export default Frontpage;