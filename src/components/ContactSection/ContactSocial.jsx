import React from "react";
import { CiFacebook as FacebookIcon } from "react-icons/ci";
import { AiOutlineTwitter as TwiterIcon } from "react-icons/ai";
import { AiFillLinkedin as LinkedinIcon } from "react-icons/ai";
import { SiPinterest as PinterestIcon } from "react-icons/si";
import AssetsImage from "../../assets/AssetsImage";

function ContactSocial() {
  return (
    <div className="flex items-center space-x-4">
      {/* Facebook Social Link */}
      <a
        href="https://www.facebook.com/GoditectIT"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1 border rounded-full bg-[#34495e] hover:bg-[#C10059]"
        title="facebook"
      >
        <FacebookIcon size={25} color="#ecf0f1" />
      </a>
      {/* Twitter Social Link */}
      <a
        href="https://twitter.com/GDitect?fbclid=IwAR1t_DJrWIFODa-wzb45Ku3cfc7IBPJqKlFQaXWonNk5LWieOW7adWJST5M"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1 border rounded-full bg-[#34495e] hover:bg-[#C10059]"
        title="Twitter"
      >
        <TwiterIcon size={25} color="#ecf0f1" />
      </a>
      {/* linkedIn Social Link */}
      <a
        href="https://www.linkedin.com/in/go-ditect-880962233"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1 border rounded-full bg-[#34495e] hover:bg-[#C10059]"
        title="linkedIn"
      >
        <LinkedinIcon size={25} color="#ecf0f1" />
      </a>
      {/* freepik Social Link */}
      <a
        href="https://www.freepik.com/author/goditect01?fbclid=IwAR1ZzpCWnw4Jnxduz_PozR2lXT4CFFfFyShiQyanBEznTXpINzwkIr0F1dc"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1 border rounded-full bg-[#34495e] hover:bg-[#C10059]"
        title="freepik"
      >
        <img
          src={AssetsImage.freepikIcon}
          alt="icon"
          className="w-[27px] rounded-full"
        />
      </a>
      {/* pinterest Social Link */}
      <a
        href="https://www.pinterest.com/goditect012333/?fbclid=IwAR0g6nhUzP9YXr2FjyxLsin2mpLsuwjAMKbk6PwUYs-llWw1XdIRi4fL4ck"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1 border rounded-full bg-[#34495e] hover:bg-[#C10059]"
        title="linkedIn"
      >
        <PinterestIcon size={25} color="#ecf0f1" />
      </a>
    </div>
  );
}

export default ContactSocial;
