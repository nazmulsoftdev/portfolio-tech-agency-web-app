/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { RiWhatsappFill as WpChatIcon } from "react-icons/ri";

function ChatOption() {
  return (
    <div className="cursor-pointer fixed right-0 bottom-5 ">
      {/* Wp Chat Option */}
      <a
        href="https://wa.me/1935-615775?text=Message%20From%20i%20Goditect%20Web?"
        target="_blank"
      >
        <WpChatIcon size={55} color="#2ed573" />
      </a>
    </div>
  );
}

export default ChatOption;
