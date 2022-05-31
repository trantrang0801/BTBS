import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.module.css'
import Slider from '../Slider/Slider';
import Slider2 from '../Slider2/Slider2';
import React, { Component } from "react";
import 'react-slick'
function Home() {
    return (
        <div>
            <Slider />
            <div className={styles.home_conten}>
                <div className={styles.conten_hea} >Tin mới nhất</div>
                <div className={styles.conten_box}>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten} src="https://soict.hust.edu.vn/wp-content/uploads/HT-SV-Ng-Van-Quyen-cover-1.jpg" />
                                <h4 >
                                    SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền
                                </h4>
                                <h5>
                                    Nguyễn Văn Quyền là một sinh viên lớp KHMT04 K65 thuộc Trường CNTT&TT, Đại học Bách khoa Hà Nội. Hoàn cảnh gia...
                                </h5>
                            </div>
                            <div class="col-md-3">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten} src="https://soict.hust.edu.vn/wp-content/uploads/DAT01879.jpg" />
                                <h4>
                                    ️TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ
                                </h4>
                                <h5>
                                    ️Vào hồi 14h ngày 07/05/2022 tại Hội trường dốc tòa nhà B1, được sự đồng ý của Đoàn thanh niên Trường Đại...
                                </h5>
                            </div>
                            <div class="col-md-3">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten} src="https://soict.hust.edu.vn/wp-content/uploads/HoiThaoVinBigdata.jpg" />
                                <h4>
                                    Hội thảo: Giới thiệu Chương trình Đào tạo Kỹ sư AI Vingroup Cơ hội Đào tạo,
                                </h4>
                                <h5>
                                    NẮM BẮT CƠ HỘI TRỞ THÀNH KỸ SƯ AI VINGROUP Nếu bạn đang băn khoăn về việc ứng tuyển tham gia chương...
                                </h5>
                            </div>
                            <div class="col-md-3">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten} src="https://soict.hust.edu.vn/wp-content/uploads/SVNCKH2021.png" />
                                <h4>
                                    HỘI NGHỊ SINH VIÊN NGHIÊN CỨU KHOA HỌC 2021-2022
                                </h4>
                                <h5>
                                    I. MỤC ĐÍCH Hội nghị Sinh viên nghiên cứu khoa học (SV NCKH) là sự kiện thường niên được tổ chức tại Trường...
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.conten_xem}`} >Xem thêm tin tức</div>

            <div className={styles.home_conten2}>
                <div className={`text-white  ${styles.conten_hea}`} >sự kiện mới nhất</div>

                <div className={styles.conten_box}>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3  ">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten} src="https://soict.hust.edu.vn/wp-content/uploads/INNOVATION-DAY-2022.png" />
                                <h4 class='bg-white p-5'>
                                    INNOVATION DAY 2022  HỘI THẢO KHOA HỌC VỀ CÁC XU
                                    <h5>
                                        Thời gian:8:00 AM - 14/05/2022<br />
                                        Địa điểm:Sảnh tầng 1-4 và Hội trường B1 - Trường Đại học Bách khoa Hà Nội
                                    </h5>
                                </h4>

                            </div>
                            <div class="col-md-3  ">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten} src="https://soict.hust.edu.vn/wp-content/uploads/STUDENT-CREATIVE-IDEAS-CHALLENGE-2022.jpg" />
                                <h4 class='bg-white p-5'>
                                    CUỘC THI TÌM KIẾM Ý TƯỞNG SÁNG TẠO SINH VIÊN 2022
                                    <h5>
                                        ️Thời gian:8:00 AM - 8/05/2022<br />
                                        Địa điểm:Tòa nhà B1 - Đại học Bách khoa Hà Nội
                                    </h5>
                                </h4>

                            </div>
                            <div class="col-md-3  ">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten} src="https://soict.hust.edu.vn/wp-content/uploads/IMG_1651507570048_1651507626090-5.jpg" />
                                <h4 class='bg-white p-5'>

                                    HỘI THẢO KHOA HỌC VỀ CÁC XU THẾ HIỆN TẠI VÀ TƯƠNG
                                    <h5>
                                        ️Thời gian:2:00 PM - 6/05/2022<br />
                                        Địa điểm:Tòa nhà B1 - Đại học Bách khoa Hà Nội </h5>
                                </h4>

                            </div>
                            <div class="col-md-3  ">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten} src="https://soict.hust.edu.vn/wp-content/uploads/Hanh-trang-sinh-vien-2022.jpg" />
                                <h4 class='bg-white p-5'>

                                    HÀNH TRANG SINH VIÊN TRƯỚC KHI RA TRƯỜNG 2022  HỘI THẢO KHOA HỌC
                                    <h5>
                                        ️Thời gian:8:00 AM - 8/05/2022<br />
                                        Địa điểm:Tòa nhà B1 - Đại học Bách khoa Hà Nội</h5>
                                </h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.conten_xem}`} >Xem thêm sự kiện</div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="text-center ">
                            ĐÀO TẠO – TUYỂN SINH
                        </h1>
                        <h4 class="text-center conten_222 ">
                            Năm 2020, Tổ chức Giáo dục Quacquarelli Symonds (viết tắt QS – Vương quốc Anh) đã đánh giá và xếp chất lượng đào tạo và nghiên cứu của ĐHBK Hà Nội trong các lĩnh vực mà Trường đang đảm nhận thuộc nhóm hạng từ 451 đến 500 trên toàn Thế giới, tiếp tục giữ vị trí số 1 tại Việt Nam.
                        </h4>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-6">
                                        <img alt="Bootstrap Image Preview" className={styles.img_3} src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/152127_1-400x267.jpg" />
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            CHƯƠNG TRÌNH ĐÀO TẠO <br />
                                            Trường hiện đang cung cấp hơn 20 chương trình đào tạo chất lượng cao thuộc 3 hệ đại học, ThS và TS; trong đó, có chương trình được thị trường lao động quốc tế đón nhận với hơn 60% sinh viên tốt nghiệp làm việc ở nước ngoài. Các chương trình đào tạo thuộc vào 3 nhóm ngành chính: Khoa học Máy tính, Kỹ thuật Máy tính, và Khoa học Dữ liệu và Trí tuệ Nhân tạo…(xem tiếp)
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-6">
                                        <img alt="Bootstrap Image Preview" className={styles.img_3} src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/IMG_8268_2-001-400x268.jpg" />
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            KIẾN TẠO TƯƠNG LAI VỚI SoICT <br />
                                            Thương hiệu Kỹ sư CNTT Bách khoa đã vượt ra khỏi biên giới nước nhà, và ngày càng chứng minh được chất lượng trên trường Quốc tế. Trong làn sóng Chuyển đổi số, lựa chọn phát triển tương lai với SoICT sẽ đem lại cho các bạn cơ hội trở thành các chuyên gia công nghệ, có khả năng làm chủ và dẫn dắt sự phát triển KHCN nước nhà… (xem tiếp)
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.br_img_123}>
                <div className={styles.brc_12s3}>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="text-center color">
                                    HỢP TÁC ĐỐI NGOẠI
                                </h1>
                                <h4 class="text-center conten_222 color">
                                    Trường CNTT&TT luôn coi trọng các hoạt động hợp tác quốc tế và hợp tác doanh nghiệp để nâng cao chất lượng các hoạt giảng dạy, nghiên cứu và chuyển giao công nghệ.
                                </h4>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row bgr-fff">
                                            <div class="col-md-6">
                                                <img alt="Bootstrap Image Preview" className={styles.img_3} src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/Screen-Shot-2019-05-02-at-1.51.23-PM-400x318.png" />
                                            </div>
                                            <div class="col-md-6">
                                                <h4 >
                                                    CÁC TRƯỜNG ĐỐI TÁC <br />
                                                    Trường CNTT&TT có quan hệ hợp tác với nhiều trường đại học và viện nghiên cứu uy tín trên Thế giới. Thông qua hợp tác, sinh viên của Trường có cơ hội học tập, nghiên cứu tại các trường đối tác thông qua các học bổng trao đổi sinh viên, cũng như các dự án hợp tác nghiên cứu. Trường hợp tác với các đại học lớn ở Châu Âu, Nhật Bản… để cung cấp cho sinh viên các chương trình đào tạo song bằng (double degree), một hình thức “du học” kinh tế và hiệu quả… (xem tiếp)
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row bgr-fff">
                                            <div class="col-md-6">
                                                <img alt="Bootstrap Image Preview" className={`${styles.img_3} img_21e2 `} src="https://soict.hust.edu.vn/wp-content/uploads/DJI_0030-fixed2-mini-20190727T100030844048.jpg" />
                                            </div>
                                            <div class="col-md-6">
                                                <h4>
                                                    DOANH NGHIỆP ĐỐI TÁC <br />
                                                    Đào tạo và nghiên cứu rất cần sự hợp tác thực chất với cộng đồng doanh nghiệp. Trường hiện đang duy trì hợp tác với mạng lưới gồm hơn 130 doanh nghiệp CNTT trong và ngoài nước, trong đó có thể kể tới HEDSPI Supporting Partner Network (HEDSPI-SPN), mạng lưới hỗ trợ sinh viên tăng cường ngoại ngữ, phát triển kỹ năng mềm, cũng như làm quen với văn hóa DN để gia tăng sức cạnh tranh trong thị trường lao động quốc tế… (xem tiếp)
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='conten-12j1'>
                <div class="container-fluid ">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="text-center py-5">
                            VỀ CHÚNG TÔI
                            </h1>
                            <div class="row ">
                                <div class="col-md-4">
                                    <div class="row">
                                        <div class="col-md-6">
    
                                            <address>
                                                <h3 className='text-center'>QS ranking 2022</h3>
                                                <h1 className='text-center'>401 – 450</h1><br /> 
                                                    <div className='text-center fz-home-212s'>trên Thế giới trong nhóm ngành Khoa học Máy tính và Hệ thống Thông tin </div>
                                            </address>
                                        </div>
                                        <div class="col-md-6">
    
                                        <address>
                                                <h3 className='text-center'>Sinh viên thuộc TOP</h3>
                                                <h1 className='text-center'>1%</h1><br /> 
                                                    <div className='text-center fz-home-212s'>điểm cao nhất Khối A Toàn quốc mùa Tuyển sinh 2019 </div>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
    
                                <address>
                                                <h3 className='text-center'>Sinh viên</h3>
                                                <h1 className='text-center'>4.000+</h1><br /> 
                                                    <div className='text-center fz-home-212s'></div>
                                            </address>
                                </div>
                                <div class="col-md-4">
                                    <div class="row">
                                        <div class="col-md-6">
    
                                        <address>
                                                <h3 className='text-center'>Chương trình đào tạo</h3>
                                                <h1 className='text-center'>17+</h1><br /> 
                                                    <div className='text-center fz-home-212s'>thuộc các hệ đào tạo cử nhân, kỹ sư, thạc sỹ khoa học, tiến sỹ</div>
                                            </address>
                                        </div>
                                        <div class="col-md-6">
    
                                        <address>
                                                <h3 className='text-center'>Đối tác</h3>
                                                <h1 className='text-center'>200+</h1><br /> 
                                                    <div className='text-center fz-home-212s'>các trường đại học, viện nghiên cứu, tập đoàn, công ty trong nước và quốc tế</div>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.home_conte3e33}>
                <div className={`text-white  ${styles.conten_hea}`} >sự kiện mới nhất</div>

                <div className={styles.conten_box}>
                    <div class="container-fluid">
                        <div class="row jefj2">
                            <div class="col-md-3  ">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten3e2} src="https://soict.hust.edu.vn/wp-content/uploads/205feec3d18738d96196.jpg" />
                                <h4 class='bg-white p-5'>
                                    INNOVATION DAY 2022  HỘI THẢO KHOA HỌC VỀ CÁC XU
                                    <h5>
                                        Thời gian:8:00 AM - 14/05/2022<br />
                                        Địa điểm:Sảnh tầng 1-4 và Hội trường B1 - Trường Đại học Bách khoa Hà Nội
                                    </h5>
                                </h4>

                            </div>
                            <div class="col-md-3  ">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten3e2} src="https://soict.hust.edu.vn/wp-content/uploads/205feec3d18738d96196.jpg" />
                                <h4 class='bg-white p-5'>
                                    CUỘC THI TÌM KIẾM Ý TƯỞNG SÁNG TẠO SINH VIÊN 2022
                                    <h5>
                                        ️Thời gian:8:00 AM - 8/05/2022<br />
                                        Địa điểm:Tòa nhà B1 - Đại học Bách khoa Hà Nội
                                    </h5>
                                </h4>

                            </div>
                            <div class="col-md-3  ">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten3e2} src="https://soict.hust.edu.vn/wp-content/uploads/2019/06/nam-2014-nguyen-ha-dong-va-flappy-bird-trong-hanh-trinh-mang-den-nhung-dieu-ky-dieu-.jpg" />
                                <h4 class='bg-white p-5'>

                                    HỘI THẢO KHOA HỌC VỀ CÁC XU THẾ HIỆN TẠI VÀ TƯƠNG
                                    <h5>
                                        ️Thời gian:2:00 PM - 6/05/2022<br />
                                        Địa điểm:Tòa nhà B1 - Đại học Bách khoa Hà Nội </h5>
                                </h4>
                            </div>
                            <div class="col-md-3  ">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten3e2} src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/hungtran-400x250.jpg" />
                                <h4 class='bg-white p-5'>

                                    HÀNH TRANG SINH VIÊN TRƯỚC KHI RA TRƯỜNG 2022  HỘI THẢO KHOA HỌC
                                    <h5>
                                        ️Thời gian:8:00 AM - 8/05/2022<br />
                                        Địa điểm:Tòa nhà B1 - Đại học Bách khoa Hà Nội</h5>
                                </h4>

                            </div>
                            <div class="col-md-3  ">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten3e2} src="https://soict.hust.edu.vn/wp-content/uploads/2019/05/nguyentuquang.jpg" />
                                <h4 class='bg-white p-5'>

                                    HÀNH TRANG SINH VIÊN TRƯỚC KHI RA TRƯỜNG 2022  HỘI THẢO KHOA HỌC
                                    <h5>
                                        ️Thời gian:8:00 AM - 8/05/2022<br />
                                        Địa điểm:Tòa nhà B1 - Đại học Bách khoa Hà Nội</h5>
                                </h4>

                            </div>
                            <div class="col-md-3  ">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten3e2} src="https://soict.hust.edu.vn/wp-content/uploads/2019/04/VuongQuangKhai-1225-1419300015.jpg" />
                                <h4 class='bg-white p-5'>

                                    HÀNH TRANG SINH VIÊN TRƯỚC KHI RA TRƯỜNG 2022  HỘI THẢO KHOA HỌC
                                    <h5>
                                        ️Thời gian:8:00 AM - 8/05/2022<br />
                                        Địa điểm:Tòa nhà B1 - Đại học Bách khoa Hà Nội</h5>
                                </h4>

                            </div>
                            <div class="col-md-3  ">
                                <img alt="Bootstrap Image Preview " className={styles.img_conten3e2} src="https://soict.hust.edu.vn/wp-content/uploads/Hanh-trang-sinh-vien-2022.jpg" />
                                <h4 class='bg-white p-5'>

                                    HÀNH TRANG SINH VIÊN TRƯỚC KHI RA TRƯỜNG 2022  HỘI THẢO KHOA HỌC
                                    <h5>
                                        ️Thời gian:8:00 AM - 8/05/2022<br />
                                        Địa điểm:Tòa nhà B1 - Đại học Bách khoa Hà Nội</h5>
                                </h4>

                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <Slider2/>
        </div>
    )
}

export default Home;