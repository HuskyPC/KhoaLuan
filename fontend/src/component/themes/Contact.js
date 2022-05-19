import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className=" mt-20  text-center">
      <p className="  text-3xl">Comming soon!</p>
      <Link to="/" className="border-2 p-2 inline-block mt-4 border-blue-500">
        Quay về trang chủ
      </Link>
    </div>
  );
};

export default Contact;
