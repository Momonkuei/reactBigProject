import React, { Component } from 'react';
import '../css/myStyle06.css';
import img001 from '../img/img001.png';
import {NavLink} from "react-router-dom";

class ProductSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            priceRange1: 0,
            priceRange2: 10000,
            productList: []
        }
    }


    handleOnChange1 = (e) => {     
        this.setState({
            priceRange1: e.target.value,
        })
    }
    handleOnChange2 = (e) => {
        this.setState({
            priceRange2: e.target.value,
        });
    }
    
    render() { 
        return ( 
            <div className="container">       
                <form className="row mb-3 gx-3 gy-2 justify-content-center">
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
                <div className="d-flex">

                    <div className="col-3 ms-5">
                        <p>條件篩選</p>
                        <form>
                            <div className="form-group col-10">
                                <input className="form-control" list="datalistOptions1" id="exampleDataList1" placeholder="遊        戲" />
                                <datalist id="datalistOptions1">
                                    <option value="楓之谷" />
                                    <option value="英雄聯盟" />
                                    <option value="APEX 英雄" />
                                </datalist>
                            </div>
                            <div className="form-group col-10 mt-4">
                                <input className="form-control" list="datalistOptions2" id="exampleDataList2" placeholder="伺  服  器" />
                                <datalist id="datalistOptions2">
                                    <option value="艾麗亞" />
                                    <option value="普力特" />
                                    <option value="優伊娜" />
                                </datalist>
                            </div>
                            <div className="form-group col-10 mt-4">
                                <input className="form-control" list="datalistOptions3" id="exampleDataList3" placeholder="商品種類" />
                                <datalist id="datalistOptions3">
                                    <option value="道具" />
                                    <option value="帳號" />
                                    <option value="點數卡" />
                                </datalist>
                            </div>
                            <div className="form-group mt-4">
                                <p>價格</p>
                                <div className="range-slider">
                                    <span className="rangeValues">
                                        ${(this.state.priceRange1 > this.state.priceRange2) ? this.state.priceRange2 : this.state.priceRange1}
                                        -
                                        ${(this.state.priceRange1 > this.state.priceRange2) ? this.state.priceRange1 : this.state.priceRange2}
                                    </span>
                                    <input value={this.state.priceRange1} min={0} max={10000} step={100} type="range" onChange={this.handleOnChange1}/>
                                    <input value={this.state.priceRange2} min={0} max={10000} step={100} type="range" onChange={this.handleOnChange2}/>
                                </div>
                            </div>

                            <button type="submit" className="btn btnhover mt-5" style={{ backgroundColor: '#265663', color: "white"}}>套用</button>
                        </form>
                    </div>

                    <div className="col-7">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>商品</th>
                                    <th></th>
                                    <th>價格</th>
                                    <th>庫存</th>
                                    <th>刊登日期</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            <tr>
                                <td>
                                    <img className="thumbnail" src={img001} alt="..."/>
                                </td>
                                <td>
                                    <NavLink className="linkColor" to="/VGT/ProductDetailPage" target="_blank">
                                    全伺服【全身裝備配好】⭐各職業都有⭐破百萬瀏覽量回鍋必備🌹送新手裝備✅加倍寵物
                                    </NavLink>
                                </td>
                                <td>1000</td>
                                <td>8591</td>
                                <td>2021/9/9</td>
                            </tr>                        
                            </tbody>
                            
                        </table>
                        <div className="d-flex justify-content-center mt-5">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link pageLinkColor" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link pageLinkColor" href="#">1</a></li>
                                    <li className="page-item">
                                        <a className="page-link pageLinkColor" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>   
        </div>
         );
    }
}
 
export default ProductSearch;