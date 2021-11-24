
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';



function ProductCmmt() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class="container-md ">
                <h1 class="">訂單留言
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
                                <th>商品編號</th>
                                <th>留言ID</th>
                                <th>留言主副</th>
                                <th>留言內容</th>
                                <th>留言時間 </th>
                                <th>修改|刪除</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>apple</td>
                                <td>您好</td>
                                <td>還有嗎?</td>
                                <td>2021-09-14 02:05:20</td>
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
                                        <span>商品編號:</span>
                                    </label>
                                    <input type="text" id="productId" placeholder="請輸入訂單編號"/>
                                </div>
                               
                                <div>
                                    <label for="">
                                        <span>留言ID:</span>
                                    </label>
                                    <input type="text" id="cmmtId" placeholder="請輸入留言ID"/>
                                </div>
                                <div>
                                    <label for="">
                                        <span>留言主副:</span>
                                    </label>
                                    <input type="text" id="cmmtAuth" placeholder="請輸入留言內容"/>
                                </div>
                                <div>
                                    <label for="">
                                        <span>留言內容:</span>
                                    </label>
                                    <input type="text" id="cmmtDesc" placeholder="請輸入留言內容"/>
                                </div>

                                <div>
                                    <label for="">
                                        <span>留言時間:</span>
                                    </label>
                                    <input type="text" id="cmmtDate" placeholder="請輸入留言時間"/>
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


export default ProductCmmt;