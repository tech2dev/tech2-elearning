import React from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineLink } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";

const Title = ({ text }) => (
  <p className="py-2 hover:text-red-500 cursor-pointer transition-all ease-linear duration-200">
    {text}
  </p>
);
const About = ({ icon, text }) => (
  <div className="flex items-center text-gray-300 cursor-pointer">
    {icon}
    <p className="ml-3 text-sm py-2 hover:text-red-500 transition-all ease-linear duration-200">
      {text}
    </p>
  </div>
);
const Footer = () => {
  return (
    <footer className="bg-gray-700">
      <div className="md:container h-full py-5 border-b-2 border-red-500">
        <div className="grid md:grid-cols-3 md:justify-items-center mx-4">
          <div className="">
            <div className="flex items-center cursor-pointer">
              <img src="techschool.ico" alt="" className="max-w-[50px]" />
              <h2 className="font-medium text-lg uppercase text-red-400">
                Học để làm
              </h2>
            </div>
            <About
              icon={<AiOutlineHome />}
              text={"Địa chỉ: Số 34 Trần Quý Kiên - Cầu Giấy - Hà Nội"}
            />
            <About
              icon={<AiOutlineLink />}
              text={"Website: https://techschool.vn"}
            />
            <About
              icon={<BsTelephoneInbound />}
              text={"Hotline: 0388875179 - 0868871330"}
            />
            <About
              icon={<AiOutlineMail />}
              text={"Email: contact@techschool.vn"}
            />
          </div>
          <div className="">
            <h2 className="font-medium text-lg uppercase text-red-400 pt-2 cursor-pointer">
              Techschool
            </h2>
            <div className="text-sm text-gray-300 pt-3">
              <Title text={"Cơ bản là nền tảng"} />
              <Title text={"Đào tạo thực chiến"} />
              <Title text={"Tập trung vào dự án"} />
              <Title text={"Hỗ trợ học viên 24/7"} />
            </div>
          </div>
          <div className="">
            <h2 className="text-lg text-red-400 cursor-pointer uppercase pt-2">
              Trung tâm đào tạo công nghệ techschool
            </h2>
            <div className="">
              <p className="text-gray-300 py-2 cursor-default">
                Mã số thuế: 0110002024
              </p>
              <p className="text-gray-300 py-2 cursor-default">
                Ngày thành lập: 19/05/2022
              </p>
              <p className="text-gray-300 py-2">
                Lĩnh vực: Công nghệ, giáo dục chúng tôi đem lại trải nghiệm chưa
                từng có tại các trung tâm khác
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:text-2xl text-center text-gray-500 uppercase py-6 cursor-pointer">
        2022 &copy; techschool - học để làm
      </div>
    </footer>
  );
};

export default Footer;
