
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';


function AppealRply() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class="container-md ">
                <h1 class="">申訴回覆
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
                                <th>管理人ID</th>
                                <th>回覆內容</th>
                                <th>回覆日期 </th>
                                <th>修改|刪除</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>處理中</td>
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
                                <span>申訴編號:</span>
                            </label>
                            <input type="text" id="appelId" placeholder="請輸入申訴編號" />
                        </div>

                        <div>
                            <label for="">
                                <span>管理人ID:</span>
                            </label>
                            <input type="text" id="managerId" placeholder="請輸入申訴人ID" />
                        </div>
                        <div>
                            <label for="">
                                <span>回覆內容:</span>
                            </label>
                            <input type="text" id="replyDesc" placeholder="請輸入訂單編號" />
                        </div>

                        <div>
                            <label for="">
                                <span>回覆日期:</span>
                            </label>
                            <input type="text" id="replyDate" placeholder="請輸入申訴分類" />
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


export default AppealRply;