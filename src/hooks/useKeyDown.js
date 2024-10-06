import React from "react";

function useKeyDown(eventHandler) {
  React.useEffect(() => {
    window.addEventListener("keydown", eventHandler);

    return () => {
      window.removeEventListener("keydown", eventHandler);
    };
  }, [eventHandler]);
}

export default useKeyDown;
