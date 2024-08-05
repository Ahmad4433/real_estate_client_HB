import { useEffect, useState } from "react";
const useValidateInput = (value) => {
  const [isValid, setIsValid] = useState(false);

  const blurHandler = () => {
    setIsValid(true);
  };

  useEffect(() => {
    if (value) {
      setIsValid(false);
    }
  }, [value]);

  return { blurHandler, isValid };
};

export default useValidateInput;
