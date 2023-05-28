import { useState } from "react";

const useHandleNavigation = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  const handleClick = () => {
    setIsMenuHidden(() => false);
    window.scroll(0, 0);
  };

  return {
    isMenuHidden,
    setIsMenuHidden,
    handleClick,
  };
};

export default useHandleNavigation;
