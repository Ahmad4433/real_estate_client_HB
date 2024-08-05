import { uiActions } from "../store/ui-slice";
import toast from "react-hot-toast";
const httpAction = (data) => async (dispatch) => {
  dispatch(uiActions.setEror(null));
  dispatch(uiActions.setLoading(true));
  try {
    const response = await fetch(data.url, {
      method: data.method ? data.method : "GET",
      body: data.formData
        ? data.formData
        : data.body
        ? JSON.stringify(data.body)
        : null,
      headers: data.token
        ? {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          }
        : data.formData
        ? {}
        : { "Content-Type": "application/json" },
    });

    const resData = await response.json();
    if (!response.ok) {
      throw new Error(resData.message);
    }

    return resData;
  } catch (error) {
    toast.error(error.message);
    dispatch(uiActions.setEror(error.message));
  } finally {
    dispatch(uiActions.setLoading(false));
  }
};

export default httpAction;
