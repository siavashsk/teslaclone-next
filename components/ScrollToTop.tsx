import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (screenY > 100) {
        setShowBtn(false);
      } else {
        setShowBtn(true);
      }
    });
  }, []);

  const goDown = () => {
    window.scrollTo({
      top: 718,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showBtn && (
        <div
          className="absolute bottom-5 cursor-pointer left-[49%]"
          onClick={goDown}
        >
          <IoIosArrowDown size={25} color="#171A20CC" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
