import { uiActions } from "./ui-slice";
const httpAction = (data) => async (dispatch) => {
  dispatch(uiActions.setLoading(true));
  dispatch(uiActions.setError(null));
  try {
    const response = await fetch(data.url, {
      method: data.method ? data.method : "GET",
      body: data.body ? JSON.stringify(data.body) : null,
      headers: {
        "Content-Type": "Application/json",
        Authorization: data.token ? `Bearer ${data.token}` : null,
      },
    });

    const resData = await response.json();
    if (!response.ok) {
      throw new Error(resData?.message);
    }

    return resData;
  } catch (error) {
    console.log(error.message);
    dispatch(uiActions.setError(error.message));
  } finally {
    dispatch(uiActions.setLoading(false));
  }
};

export default httpAction;
