
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';
const Appeal=() =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   

    return (
        <React.Fragment>
            <div class="container-md ">
                <h1 class="">申訴資料
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
                                <th>申訴編號</th>
                                <th>申訴人ID</th>
                                <th>訂單編號</th>
                                <th>申訴分類 </th>
                                <th>申訴內容</th>
                                <th>申訴時間</th>
                                <th>申訴圖片</th>
                                <th>修改|刪除</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>8</td>
                                <td>7</td>
                                <td>6</td>
                                <td>帳號</td>
                                <td>角色資訊與賣家描述不同，申請交易調解</td>
                                <td>2021-09-14 02:05:20</td>
                                <td>null</td>
                                <td>
                                    <button type="button" class=" btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop" >
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
                                    <label for="appelId">
                                        <span>申訴編號:</span>
                                    </label>
                                    <input type="text" id="appelId"  placeholder="請輸入申訴編號"/>
                                </div>

                                <div>
                                    <label for="appellantId">
                                        <span>申訴人ID:</span>
                                    </label>
                                    <input type="text" id="appellantId"  placeholder="請輸入申訴人ID"/>
                                </div>
                                <div>
                                    <label for="orderId">
                                        <span>訂單編號:</span>
                                    </label>
                                    <input type="text" id="orderId"  placeholder="請輸入訂單編號"/>
                                </div>

                                <div>
                                    <label for="appealClass">
                                        <span>申訴分類:</span>
                                    </label>
                                    <input type="text" id="appealClass" placeholder="請輸入申訴分類"/>
                                </div>

                                <div>
                                    <label for="appealDesc">
                                        <span>申訴內容:</span>
                                    </label>
                                    <input type="text" id="appealDesc" placeholder="請輸入申訴內容"/>
                                </div>

                                <div>
                                    <label for="appealDate">
                                        <span>申訴時間:</span>
                                    </label>
                                    <input type="text" id="appealDate" placeholder="請輸入申訴時間"/>
                                </div>

                                <div>
                                    <label for="appealImg">
                                        <span>申訴圖片:</span>
                                    </label>
                                    <input type="file" id="appealImg" placeholder="請輸入申訴圖片"/>
                                </div>


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal" onClick={handleClose}>關閉</button>
                    <button type="button" class="btn-sm">儲存</button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}


export default Appeal;