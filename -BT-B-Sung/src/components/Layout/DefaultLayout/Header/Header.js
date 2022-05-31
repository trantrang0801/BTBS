import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js'
import Modal from '../../../../pages/Modal/Modal';
function Header() {
    return (
        <div >
            <div className={styles.Header}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-3">
                                    <Link to ='/'><img alt="Bootstrap Image Preview " className='width100 img_mb2w2' src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png" /></Link>
                                </div>
                                <div class="col-md-6 Header_text">
                                    <h3 >
                                        ĐẠI HỌC BÁCH KHOA HÀ NỘI <br />
                                        TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
                                    </h3>
                                </div>
                                <div class="col-md-3 Header_text">
                                    <form className={`d-flex seacher`}>
                                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" ></input>
                                        <button class="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal/>
            </div>
            <div className={styles.navbar}>
                <nav className=" bgr navbar navbar-expand-lg navbar-light  navber-dark awr3d">

                    <ul className={`bgr cursor navbar-nav ${styles.Dropdown}`}>
                        <li className="nav-item dropdown">
                            <div className={`bgr cursor nav-link dropdown-toggle  bg-black text-light`} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Giới thiệu
                            </div>
                            <div className={`dropdown-menu list   `} aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Thông tin chung</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Triết lí giáo dục</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Cơ cấu giáo dục</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Đảng ủy – Hội đồng Trường</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Ban Lãnh đạo Trường</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Các Tổ chức Đoàn thể</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Văn phòng Trường</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Danh sách Cán bộ</Link>


                            </div>
                        </li>
                    </ul>
                    <ul className={`bgr cursor navbar-nav ${styles.Dropdown}`}>
                        <li className="nav-item dropdown">
                            <div className={`bgr cursor nav-link dropdown-toggle  bg-black text-light`} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Khoa–Trung tâm
                            </div>
                            <div className={`dropdown-menu ${styles.list}   `} aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Khoa</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Khoa học máy tính</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Kĩ thuật máy tính</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className={`bgr cursor navbar-nav ${styles.Dropdown}`}>
                        <li className="nav-item dropdown">
                            <div className={`bgr cursor nav-link dropdown-toggle  bg-black text-light`} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Đào tạo
                            </div>
                            <div className={`dropdown-menu ${styles.list}   `} aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Giới thiệu chung</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Hệ đại học</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Hệ thạc sĩ </Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Hệ tiến sĩ</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Đào tạo chứng chỉ</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className={`bgr cursor navbar-nav ${styles.Dropdown}`}>
                        <li className="nav-item dropdown">
                            <div className={`bgr cursor nav-link dropdown-toggle  bg-black text-light`} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Nghiên cứu
                            </div>
                            <div className={`dropdown-menu ${styles.list}   `} aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Giới thiệu chung</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Các phòng thí nghiệm</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Các đề tài dự án </Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Công bố khoa học</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Tìm chuyên gia?</Link>

                            </div>
                        </li>
                    </ul>
                    <ul className={`bgr cursor navbar-nav ${styles.Dropdown}`}>
                        <li className="nav-item dropdown">
                            <div className={`bgr cursor nav-link dropdown-toggle  bg-black text-light`} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tuyển sinh
                            </div>
                            <div className={`dropdown-menu ${styles.list}   `} aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Kiến tạo tương lai vơi SolCT</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Tuyển sinh 2022</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Điểm chuẩn tham khảm</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Tuyển sinh đào tạo ngắn hạn</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Hỏi đáp tuyển sinh </Link>

                            </div>
                        </li>
                    </ul>
                    <ul className={`bgr cursor navbar-nav ${styles.Dropdown}`}>
                        <li className="nav-item dropdown">
                            <div className={`bgr cursor nav-link dropdown-toggle  bg-black text-light`} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sinh viên
                            </div>
                            <div className={`dropdown-menu ${styles.list}   `} aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Biểu mẫu và quy định dành cho sinh viên</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Cố vấn học tập</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Hoạt động sinh viên nghiên cứu khoa học</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className={`bgr cursor navbar-nav ${styles.Dropdown}`}>
                        <li className="nav-item dropdown">
                            <div className={`bgr cursor nav-link dropdown-toggle  bg-black text-light`} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Hợp tác đối ngoại
                            </div>
                            <div className={`dropdown-menu ${styles.list}   `} aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Giới thiệu chung</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Hợp tác với Khối Hàn lâm</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Hợp tác với Khối Doanh nghiệp</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className={`bgr cursor navbar-nav ${styles.Dropdown}`}>
                        <li className="nav-item dropdown">
                            <div className={`bgr cursor nav-link dropdown-toggle  bg-black text-light`} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cựu sinh viên
                            </div>
                            <div className={`dropdown-menu ${styles.list}   `} aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Giới thiệu chung</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Tấm gương cựu sinh viên</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className={`bgr cursor navbar-nav ${styles.Dropdown}`}>
                        <li className="nav-item dropdown">
                            <div className={`bgr cursor nav-link dropdown-toggle  bg-black text-light`} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tin tức sự kiện
                            </div>
                            <div className={`dropdown-menu ${styles.list}   `} aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/tintuc' className={` p-3 px-5  dropdown-item  text-light`} >Tin tức</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Thông báo</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Tin bài</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >SoICT Talks</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className={`bgr cursor navbar-nav ${styles.Dropdown}`}>
                        <li className="nav-item dropdown">
                            <div className={`bgr cursor nav-link dropdown-toggle  bg-black text-light`} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tuyển dụng
                            </div>
                            <div className={`dropdown-menu ${styles.list}   `} aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Việc làm tại SoICT</Link>
                                <Link to='/' className={` p-3 px-5  dropdown-item  text-light`} >Việc làm cho Sinh viên</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;