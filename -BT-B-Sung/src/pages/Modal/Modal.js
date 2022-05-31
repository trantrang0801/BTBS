import React, { useState } from "react";
import "./Modal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import{Link} from 'react-router-dom'
export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
            <i class="bi bi-list"></i>
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Hello Modal</h2>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" ></input>
                        <button className="close-modal dwqwe" onClick={toggleModal}>
                        <i class="bi bi-x-lg "></i>
                        </button>
                        <ul className="ul_list">
                            <li ><Link to ='/'>Giới thiệu</Link></li>
                            
                            <li > <Link to ='/'>Khoa-trung tâm</Link></li>
                            <li > <Link to ='/'>Đào tạo</Link></li>
                            <li > <Link to ='/'>Hơp tác đối ngoại</Link></li>
                            <li > <Link to ='/'>Cựu sinh viên </Link></li>
                            <li ><Link to ='/tintuc'>Tin tức-Sự kiện</Link></li>
                            <li > <Link to ='/'>Tuyển dụng</Link></li>

                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}