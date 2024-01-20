import React, { useState, useEffect, memo } from "react";
import { mobileCountryCode } from "../../../utils/mobileCountryCodeDb";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function CountryCodeInput({ onChange, phoneCode }) {
  const [callCode, setCallCode] = useState([]);

  useEffect(() => {
    setCallCode(mobileCountryCode);
  }, []);

  return (
    <select
      value={phoneCode}
      onChange={onChange}
      className="p-3 border-0 bg-[#F3F5FE] outline-none rounded-md  focus:border focus:border-[#FDD5EC] scrollbar-w-[3px] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100"
    >
      {callCode?.map((item, index) => {
        return (
          <option key={index} value={item.code}>
            {item.code}
          </option>
        );
      })}
    </select>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(CountryCodeInput);
