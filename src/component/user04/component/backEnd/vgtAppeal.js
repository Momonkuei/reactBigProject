import React, { Component } from 'react';
import '../../css/user_04.css';
import{$}from "jquery"
class Appeal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="container ">
        <h1 class="">申訴資料
            <span>
                <button class="btn-lg   fs-3 " onClick={modalShow}>
                    +
                </button>
            </span>
        </h1><br/><br/>
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
                                data-bs-target="#staticBackdrop" onClick={modalShow}>
                                修改
                            </button>
                            <button class=" btn-sm">刪除</button>
                        </td>

                    </tr>





                </tbody>
            </table>
            


       
            <div class="modal fade" id="showModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header listTitle">
                            <h5 class="modal-title " id="staticBackdropLabel">新增/修改</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="">
                                <div>
                                    <label for="">
                                        <span>申訴編號:</span>
                                    </label>
                                    <input type="text" id="appelId" placeholder="請輸入申訴編號"/>
                                </div>

                                <div>
                                    <label for="">
                                        <span>申訴人ID:</span>
                                    </label>
                                    <input type="text" id="appellantId" placeholder="請輸入申訴人ID"/>
                                </div>
                                <div>
                                    <label for="">
                                        <span>訂單編號:</span>
                                    </label>
                                    <input type="text" id="orderId" placeholder="請輸入訂單編號"/>
                                </div>

                                <div>
                                    <label for="">
                                        <span>申訴分類:</span>
                                    </label>
                                    <input type="text" id="appealClass" placeholder="請輸入申訴分類"/>
                                </div>

                                <div>
                                    <label for="">
                                        <span>申訴內容:</span>
                                    </label>
                                    <input type="text" id="appealDesc" placeholder="請輸入申訴內容"/>
                                </div>

                                <div>
                                    <label for="">
                                        <span>申訴時間:</span>
                                    </label>
                                    <input type="text" id="appealDate" placeholder="請輸入申訴時間"/>
                                </div>

                                <div>
                                    <label for="">
                                        <span>申訴圖片:</span>
                                    </label>
                                    <input type="file" id="appealImg" placeholder="請輸入申訴圖片"/>
                                </div>


                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">關閉</button>
                            <button type="button" class="btn-sm">儲存</button>
                        </div>
                    </div>
                </div>
            </div>


        </main>








    </div>
         );
    }
}
function modalShow() {
    $("#showModal").modal("show");
}
export default Appeal;




