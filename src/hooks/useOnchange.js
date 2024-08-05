import { useEffect, useState } from "react";

const useOnChange = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = (event) => {
    if (typeof event === "object" && event !== null && "target" in event) {
      setValue(event.target.value);
    } else {
      setValue(event);
    }
  };

  return {
    onChangeHandler,
    value,
  };
};

export default useOnChange;
