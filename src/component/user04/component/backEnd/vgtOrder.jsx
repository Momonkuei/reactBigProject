
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';


function Order() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class="container-md ">
                <h1 class="">訂單資料
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
                                <th>訂單編號</th>
                                <th>買家ID </th>
                                <th>商品編號</th>
                                <th>交易狀態</th>
                                <th>角色名稱</th>
                                <th>角色特徵</th>
                                <th>修改|刪除</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>1</td>
                                <td>NULL</td>
                                <td>NULL</td>
                                <td>NULL</td>
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
                                <span>訂單編號:</span>
                            </label>
                            <input type="text" id="orderId" placeholder="請輸入訂單編號"/>
                        </div>
              
                        <div>
                            <label for="">
                                <span>買家ID:</span>
                            </label>
                            <input type="text" id="buyerId" placeholder="請輸入買家ID"/>
                        </div>
                        <div>
                            <label for="">
                                <span>商品編號:</span>
                            </label>
                            <input type="text" id="productId" placeholder="請輸入商品編號"/>
                        </div>
                        <div>
                            <label for="">
                                <span>交易狀態:</span>
                            </label>
                            <input type="text" id="state" placeholder="請輸入交易狀態"/>
                        </div>
                        <div>
                            <label for="">
                                <span>角色名稱:</span>
                            </label>
                            <input type="text" id="characterName" placeholder="請輸入角色名稱"/>
                        </div>
                        <div>
                            <label for="">
                                <span>角色特徵:</span>
                            </label>
                            <input type="text" id="characterDesc" placeholder="請輸入角色特徵"/>
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


export default Order;