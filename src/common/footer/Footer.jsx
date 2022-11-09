import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>GRAB FOOD</h1>
            <p>Nhằm mang đến trải nghiệm liền mạch, cũng như thống nhất về tiêu chuẩn chất lượng dịch vụ cho người dùng, hướng tới những lợi ích phát triển chung của các bên tham gia, Grab xin thông báo đến Quý Đối tác một số điều chỉnh liên quan đến Bộ Quy Tắc Ứng Xử dành cho Đối tác Nhà hàng GrabFood và GrabKitchen (“Bộ QTUX”). Bộ QTUX này sẽ có hiệu lực áp dụng kể từ ngày 03/10/2022</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Về Chúng Tôi</h2>
            <ul>
              <li>Nghề nghiệp</li>
              <li>Cửa hàng của chúng tôi</li>
              <li>Chúng tôi</li>
              <li>Điều khoản và điều kiện</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Chăm sóc khách hàng</h2>
            <ul>
              <li>Trung tâm trợ giúp</li>
              <li>Mua thế nào</li>
              <li>Theo dõi đơn hàng của bạn</li>
              <li>Công ty & Mua hàng loạt</li>
              <li>Trả lại và hoàn lại tiền</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Liên hệ chúng tôi</h2>
            <ul>
              <li>Dịch vụ trung gian thanh toán do Công ty Cổ phần Công nghệ và Dịch Vụ Moca cung cấp. Mã số doanh nghiệp: 0106254974 </li>
              <li>Email: grabfood.help@gmail.com</li>
              <li>Phone: +1 1123 456 789</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
