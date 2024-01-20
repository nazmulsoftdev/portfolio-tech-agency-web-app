import React from "react";
import styled from "./PrivacyTitle.module.css";

// eslint-disable-next-line react/prop-types
function PrivacyTitle({ children }) {
  return (
    <div className={`${styled.PrivacyTitlteBox} mt-5 mb-5 p-2  w-fit `}>
      <h3 className="text-white  font-bold text-[16px] lg:text-[20px]">
        {children}
      </h3>
    </div>
  );
}

export default PrivacyTitle;
