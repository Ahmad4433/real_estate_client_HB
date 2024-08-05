import { useDispatch, useSelector } from "react-redux";

const useProvideState = () => {
  const dispatch = useDispatch();
  return { dispatch, useSelector };
};

export default useProvideState;
