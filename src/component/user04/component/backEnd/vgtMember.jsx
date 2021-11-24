
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';


function Member() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
  
    return (
      <>
      <div class="container-md ">
        <h1 class="">會員資料
            <span>
                <button className="btn-lg fs-3 " onClick={handleShow}>
                    +
                   </button>
            </span>
           
        </h1>
        <br/><br></br>
        <main class="align-items-start ">

<table class="table table-bordered">
    <thead class="listTitle ">
        <tr>
            <th>會員ID</th>
            <th>暱稱</th>
            <th>帳號</th>
            <th>密碼</th>
            <th>姓名</th>
            <th>生日</th>
            <th>身分證</th>
            <th>信箱</th>
            <th>手機</th>
            <th>權限</th>
            <th>餘額</th>
            <th>付款密碼</th>
            <th>修改|刪除</th>

        </tr>
    </thead>
    <tbody>
        <tr>
            <td>BigDip</td>
            <td>user1</td>
            <td>user1</td>
            <td>user1</td>
            <td>郭仕隆</td>
            <td>1995-01-05</td>
            <td>A125365610</td>
            <td>BigDip@gmail.com</td>
            <td>0952123548</td>
            <td>權限1</td>
            <td>1000</td>
            <td>vgtuser1</td>
            <td>
                <button type="button" class=" btn-sm" onClick={handleShow}>
                    修改
                </button>
                <button class=" btn-sm">刪除</button>
            </td>

        </tr>
        <tr>
            <td>HoleyMole</td>
            <td>user2</td>
            <td>user2</td>
            <td>user2</td>
            <td>林雅芬</td>
            <td>1983-11-15</td>
            <td>G100700575</td>
            <td>HoleyMole@gmail.com</td>
            <td>0912568523</td>
            <td>權限1</td>
            <td>12852</td>
            <td>vgtuser2</td>
            <td>
                <button type="button" class=" btn-sm" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop" onclick="modalShow()">
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
                                    <input type="text" id="vgtId" placeholder="請輸入會員ID"/>
                                </div>
                                <div>
                                    <label for="">
                                        <span>暱稱:</span>
                                    </label>
                                    <input type="text" id="vgtName" placeholder="請輸入暱稱"/>
                                </div>
                                <div>
                                    <label for="">
                                        <span>帳號:</span>
                                    </label>
                                    <input type="text" id="account" placeholder="請輸入帳號"/>
                                </div>
                                <div>
                                    <label for="">
                                        <span>密碼:</span>
                                    </label>
                                    <input type="text" id="passWord" placeholder="請輸入密碼"/>
                                </div>
    
                                <div>
                                    <label for="">
                                        <span>姓名:</span>
                                    </label>
                                    <input type="text" id="trueName" placeholder="請輸入姓名"/>
                                </div>
                                <div>
                                    <label for="">
                                        <span>生日:</span>
                                    </label>
                                    <input type="text" id="birthDate" placeholder="請輸入生日"/>
                                </div>

                                <div>
                                    <label for="">
                                        <span>身分證:</span>
                                    </label>
                                    <input type="text" id="trueId" placeholder="請輸入身分證"/>
                                </div>
                                <div>
                                    <label for="">
                                        <span>信箱:</span>
                                    </label>
                                    <input type="text" id="eMail" placeholder="請輸入E-Mail"/>
                                </div>
                                <div>
                                    <label for="">
                                        <span>手機:</span>
                                    </label>
                                    <input type="text" id="phone" placeholder="請輸入手機"/>
                                </div>
                                <div>
                                    <label for="">
                                        <span>權限:</span>
                                    </label>
                                    <input type="text" id="auth" placeholder="請輸入權限"/>
                                </div>
                                <div>
                                    <label for="">
                                        <span>餘額:</span>
                                    </label>
                                    <input type="text" id="vgtPoint" placeholder="請輸入餘額"/>
                                </div>
                                <div>
                                    <label for="">
                                        <span>付款密碼:</span>
                                    </label>
                                    <input type="text" id="vgtPassWord" placeholder="請輸入付款密碼"/>
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
  
 
export default Member;