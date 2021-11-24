
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';


function Product() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class="container-md ">
                <h1 class="">商品資料
                    <span>
                        <button className="btn-lg fs-3 " onClick={handleShow}>
                            +
                        </button>
                    </span>

                </h1>
                <br /><br></br>
                <main class="align-items-start ">

                    <table class="table table-bordered">
                        <thead class="listTitle ">
                            <tr>
                                <th>會員ID</th>
                                <th>商品編號</th>
                                <th>遊戲分類</th>
                                <th>伺服器 </th>
                                <th>商品標題</th>
                                <th>商品分類</th>
                                <th>商品內容</th>
                                <th>商品數量</th>
                                <th>商品圖片 </th>
                                <th>價錢 </th>
                                <th>刊登日期 </th>
                                <th>是否生成訂單 </th>
                                <th>修改|刪除</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>1</td>
                                <td>楓之谷</td>
                                <td>普力特</td>
                                <td>幻獸退谷-22星神秘幻獸棒-34%魔46B（高攻全榮耀）</td>
                                <td>道具</td>
                                <td>【練功打王首選】 僅此一個，此單直接下單購買即可</td>
                                <td>IMG</td>
                                <td>11000</td>
                                <td>1</td>
                                <td>2021-09-09 18:02:53</td>
                                <td>yes</td>
                                <td>
                                    <button type="button" class=" btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop" onClick={handleShow}>
                                        修改
                                    </button>
                                    <button class=" btn-sm">刪除</button>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </main>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>新增/修改</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">

                        <div>
                            <label for="">
                                <span>會員ID:</span>
                            </label>
                            <input type="text" id="vgtId" placeholder="請輸入商品編號"/>
                        </div>

                        <div>
                            <label for="">
                                <span>商品編號:</span>
                            </label>
                            <input type="text" id="productId" placeholder="請輸入商品編號"/>
                        </div>

                        <div>
                            <label for="">
                                <span>遊戲分類:</span>
                            </label>
                            <input type="text" id="gameList" placeholder="請輸入遊戲分類"/>
                        </div>
                        <div>
                            <label for="">
                                <span>伺服器:</span>
                            </label>
                            <input type="text" id="gameServer" placeholder="請輸入伺服器"/>
                        </div>
                        <div>
                            <label for="">
                                <span>商品標題:</span>
                            </label>
                            <input type="text" id="producTtitle" placeholder="請輸入商品標題"/>
                        </div>
                        <div>
                            <label for="">
                                <span>商品分類:</span>
                            </label>
                            <input type="text" id="productClass" placeholder="請輸入商品分類"/>
                        </div>
                        <div>
                            <label for="">
                                <span>商品內容:</span>
                            </label>
                            <input type="text" id="perductDesc" placeholder="請輸入商品內容"/>
                        </div>
                        <div>
                            <label for="">
                                <span>商品數量:</span>
                            </label>
                            <input type="text" id="perductQuant" placeholder="請輸入價錢"/>
                        </div>
                        <div>
                            <label for="">
                                <span>商品圖片:</span>
                            </label>
                            <input type="text" id="productImg" placeholder="請輸入刊登日期"/>
                        </div>
                        <div>
                            <label for="">
                                <span>價錢:</span>
                            </label>
                            <input type="file" id="productPrice" placeholder="請輸入商品圖片"/>
                        </div>
                        <div>
                            <label for="">
                                <span>是否生成訂單:</span>
                            </label>
                            <input type="file" id="productToorder" placeholder="請輸入商品圖片"/>
                        </div>




                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal" onClick={handleClose}>關閉</button>
                    <button type="button" class="btn-sm">儲存</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Product;