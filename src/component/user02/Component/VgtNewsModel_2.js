import React, { Component, useState } from 'react';
import '../css/style.css';
import { Modal, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import axios from "axios";

    
    const baseURL = "http://localhost:3000/Vgt/vgtserver/vgtnews";
    export default function GetData() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        </div>
    );
    }
    function MyVerticallyCenteredModal(newstitle, newsdesc,) {
        const [show, setShow] = useState(true)
        
        const onHide = () => {
            setShow(false)        
        }
        return (

            <Modal
            // {newstitle,newsdesc}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {newstitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <h4>Centered Modal</h4> */}
                <p>
                {newsdesc}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
        }

        function ModelList(newstitle, newsdate, newsdesc) {
        const [modalShow, setModalShow] = React.useState(false);
        return (
            <div>
            <tr>
                <td>
                    <a  onClick={() => setModalShow(true)}>
                    {newstitle}
                    </a>
                </td>
                <td>{newsdate}</td>
            </tr>    

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                newstitle={newstitle }    
                newsdesc={newsdesc}
                    
            />
            </div>
        );
    }

    class VgtNewsModel extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                vgtNews: [
                            {
                                manangerid:11,
                                newstitle: "????????????????????????????????????????????????",
                                newsdesc: "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
                                newsdate: "2021-09-09T09:55:03.000Z"
                            },
                            {
                                manangerid:12,
                                newstitle: "??????????????????????????????!",
                                newsdesc: "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
                                newsdate: "2021-09-11T02:55:23.000Z"
                            },
                            {
                            manangerid:13,
                            newstitle: "VGT??????????????????????????????!",
                            newsdesc: "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
                            newsdate: "2021-09-13T06:54:31.000Z"
                            }
                ]
            }
        }    
    render() { 
        return (
            <div>
                <div className="container w-75 mt-5 border-secondary">
                    <table className="table table-bordered table-hover">
                        <thead className="bg-project">
                            <tr>
                                <th className="col-9">??????</th>
                                <th className="col-3">????????????</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.vgtNews.map((item) => (
                                <div>
                                    <ModelList newstitle={item.newstitle} newsdate={ new Date(item.newsdate).toLocaleDateString()} newsdesc={item.newsdesc }/>
                                </div>
                            ))}
                        </tbody>
                    </table>
                </div>        
            </div>
            
        );
                
    }        
}
 
export default VgtNewsModel;