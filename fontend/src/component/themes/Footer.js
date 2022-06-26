import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" footer w-full bg-white   mt-16">
      <div className="about px-20 py-8">
        <div className=" grid grid-cols-4 gap-5">
          <div className="text-lg flex items-center justify-center">
            <i className="fas fa-phone float-left p-2 text-[30px] box-border mt-1"></i>
            <h2 className=" float-left ml-2">
              24/7 Hỗ trợ <br />{" "}
              <span className="text-gray-400 font-light">Miễn phí</span>
            </h2>
          </div>
          <div className="text-lg flex items-center justify-center">
            <i className="fas fa-star float-left p-2 text-[30px] box-border mt-1"></i>
            <h2 className=" float-left ml-2">
              Đảm bảo
              <br /> <span className="text-gray-400 font-light">Giá tốt</span>
            </h2>
          </div>
          <div className="text-lg flex items-center justify-center">
            <i className="fas fa-cog float-left p-2 text-[30px] box-border mt-1"></i>
            <h2 className=" float-left ml-2">
              Bảo hành
              <br /> <span className="text-gray-400 font-light">2 năm</span>
            </h2>
          </div>
          <div className="text-lg flex items-center justify-center">
            <i className="fas fa-undo float-left p-2 text-[30px] box-border mt-1"></i>
            <h2 className=" float-left ml-2">
              Đổi trả
              <br />
              <span className="text-gray-400 font-light">Trong 30 ngày</span>
            </h2>
          </div>
        </div>
      </div>
      <hr className="bg-gray-rgba-1" />
      <div className="footer-menu px-20 py-8 font-light">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <h3 className="text-lg ">Thông tin</h3>
            <div className="w-full text-sm mt-4 text-gray-400 Link:nth-child ">
              <Link to="/" className="block hover:text-blue-500 py-1">
                Về chúng tôi
              </Link>
              <Link to="/" className="block hover:text-blue-500 py-1">
                Chính sách đổi trả hàng
              </Link>
              <Link to="/" className="block hover:text-blue-500 py-1">
                Đặt hàng như thế nào
              </Link>
              <Link to="/" className="block hover:text-blue-500 py-1">
                Chính sách vận chuyển
              </Link>
            </div>
          </div>
          <div className="col-span-3">
            <h3 className="text-lg ">Hỗ trợ</h3>
            <div className="w-full text-sm mt-4 text-gray-400 Link:nth-child ">
              <Link to="/" className="block hover:text-blue-500 py-1">
                Đổi trả
              </Link>
              <Link to="/" className="block hover:text-blue-500 py-1">
                FAQ
              </Link>
              <Link to="/" className="block hover:text-blue-500 py-1">
                Liên hệ
              </Link>
            </div>
          </div>
          <div className="col-span-3">
            <h3 className="text-lg ">Địa chỉ</h3>
            <div className="w-full text-sm mt-4 text-gray-400 Link:nth-child ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.82022905807594!2d106.79906262396219!3d10.844805395535795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175273ebc7fc351%3A0xc14a1cd8fc2b6308!2zSOG6u20gODksIMSQxrDhu51uZyBMw6BuZyBUxINuZyBQaMO6!5e0!3m2!1svi!2s!4v1656184079856!5m2!1svi!2s"
                className="w-48 "
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="my map"
              />
            </div>
          </div>
          <div className="col-span-3 text-right">
            <h3 className="text-lg ">Website Laptop TB</h3>
            <div className="w-full text-sm mt-4 text-gray-400 Link:nth-child ">
              <a
                target="_blank"
                href="https://www.google.com/maps/place/H%E1%BA%BBm+89,+%C4%90%C6%B0%E1%BB%9Dng+L%C3%A0ng+T%C4%83ng+Ph%C3%BA/@10.8447936,106.7967918,17z/data=!3m1!4b1!4m5!3m4!1s0x3175273ebc7fc351:0xc14a1cd8fc2b6308!8m2!3d10.8447867!4d106.7989803?hl=vi-VN"
                rel="noopener noreferrer"
                className="block hover:text-blue-500 py-1 text-xs"
              >
                Hẻm 89, Đường Làng Tăng Phú, Làng Tăng Phú, Tăng Nhơn Phú A,
                Quận 9, Thành phố Hồ Chí Minh
              </a>
              <h4 className="block hover:text-blue-500 py-1">
                Phone: 0123456789
              </h4>
              <h4 className="block hover:text-blue-500 py-1">
                Email: binh1432001@gmail.com
              </h4>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-gray-rgba-1" />
      <div className=" w-full text-center px-20 py-8">
        <h1> Website được viết bởi Nguyễn Thanh Bình</h1>
        <strong className="text-red-500 text-xs "> website thử nghiệm</strong>
      </div>
    </div>
  );
};

export default Footer;
