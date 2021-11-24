
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';


const News=()=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class="container-md ">
                <h1 class="">公告資料
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
                                <th>管理員ID</th>
                                <th>公告標題</th>
                                <th>公告內容</th>
                                <th>公告時間 </th>
                                <th>修改|刪除</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>才太世？報無多華的還會要有</td>
                                <td>流民文自安家所年機長北士林告過！在黃道能謝港臺我影就時什？響東處過本的爾內理、到打雙但跟那爾的們性裡態是受這月旅？我我和質道。這有為下院男面，所上進，服風低如？發會可最子立也之臺久到成底質的都身持，形要一意。跑想極雄找營在了算。清男安石興形
                                </td>
                                <td>2021-09-09 17:55:03</td>
                                <td>
                            <button type="button" class=" btn-sm" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop" onclick=" modalShow()">
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
                                <span>管理員ID:</span>
                            </label>
                            <input type="text" id="managerId" placeholder="請輸入管理員ID" />
                        </div>
                        <div>
                            <label for="">
                                <span>公告標題:</span>
                            </label>
                            <input type="text" id="newsTitle" placeholder="請輸入公告標題" />
                        </div>
                        <div>
                            <label for="">
                                <span>公告內容:</span>
                            </label>
                            <input type="text" id="newsDesc" placeholder="請輸入公告內容" />
                        </div>
                        <div>
                            <label for="">
                                <span>公告時間:</span>
                            </label>
                            <input type="text" id="newsDate" placeholder="請輸入公告時間" />
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


export default News;