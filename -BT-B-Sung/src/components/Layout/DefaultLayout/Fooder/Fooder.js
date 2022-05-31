import styles from './Fooder.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from 'react-router-dom'
function Fooder() {
  return <div className={styles.Fooder}>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <div className={styles.Fooder_tt}>
              KHOA – TRUNG TÂM
              </div>
              <ol>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Khoa học Máy tính</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Kỹ thuật Máy tính</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Trung tâm Cyber Security</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Trung tâm Đổi mới Sáng tạo</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Trung tâm Máy tính và Thực hành</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Trung tậm Nghiên cứu Quốc tế về Định vị sử dụng vệ tinh (NAVIS)</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Trung tâm Nghiên cứu Quốc tế về Trí tuệ nhân tạo  </Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Văn Phòng Trường</Link>
                </li>
                
              </ol>
            </div>
            <div class="col-md-6">
            <div className={styles.Fooder_tt}>
            CHƯƠNG TRÌNH ĐÀO TẠO
              </div>
              <ol>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Chương trình Việt Nhật (HEDSPI) </Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Chương trình Global ICT</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Chương trình Khoa học dữ liệu và trí tuệ nhân tạo</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Chương trình Thạc sỹ Chuyển đổi số</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Các chương trình đại học</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Các chương trình thạc sỹ</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Các chương trình tiến sỹ</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Các chương trình đào tạo ngắn hạn</Link>
                </li>
                
              </ol>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
            <div className={styles.Fooder_tt}>
            HỆ THỐNG VÀ TÀI NGUYÊN
              </div>
              <ol>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Hệ thống Quản lý Đào tạo</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Hệ thống Quản lý Hợp tác Doanh nghiệp</Link>
                </li>
                <li class="list-item list-inline-item">
                  <Link className='fz-home-212s1' to ='/'>Các mẫu biểu dành cho sinh viên Viện</Link>
                </li>
                
              </ol>
            </div>
            <div class="col-md-6">
                <div >
                  <img className={styles.img_fooder} src='https://soict.hust.edu.vn/wp-content/uploads/2019/04/soict-light-logo-300x66.png'/>
                </div>
                <div className= 'fz-home-212s1 color'>
                (+84) 24 3869 2463<br/>
                  vp@soict.hust.edu.vn<br/>
                  P. 505 – Nhà B1 – Đại học Bách khoa Hà Nội<br/>
                  Số 1 Đại Cồ Việt – Hai Bà Trưng – Hà Nội<br/>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Fooder_end}>
      Copyright © Trường Công nghệ Thông tin và Truyền thông
      </div>
    </div>
  </div>;
}

export default Fooder;