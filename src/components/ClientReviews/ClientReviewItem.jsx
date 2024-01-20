import React from "react";
import styled from "./ClientReviewItem.module.css";
// eslint-disable-next-line react/prop-types
function ClientReviewItem({ items }) {
  const { name, image, reviewText } = items || {};
  return (
    <div
      className={` w-full shadow-md p-6 relative flex flex-col justify-center items-center space-y-2 rounded-md hover:shadow-xl`}
    >
      <div className={`${styled.AvaterContainer} shadow-2xl bg-white`}>
        <img
          src={image}
          alt="avater"
          className="w-[50px] h-[50px] rounded-full"
        />
      </div>
      <p className="text-[16px] font-bold text-center">{name}</p>
      <div>
        <p className="text-[#3c6382] text-sm">{reviewText}</p>
      </div>
    </div>
  );
}

export default ClientReviewItem;
