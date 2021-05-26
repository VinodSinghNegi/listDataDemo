import axios from "axios";
import { getQuestionsArrayAction } from "../actions/getQuestionsArray_action";

export const getQuestionsArrayApi = (pageSize) => {
  return axios
    .get(
      `https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=${pageSize}&order=desc&sort=activity&site=stackoverflow`
    )
    .then((response) => {
      return {
        type: "response",
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        type: "error",
        data: "Error encountered in => getQuestionsArrayApi : " + error,
      };
    });
};

export const callQuestionsArrayApi = async (dispatch, pageSize) => {
  let response = await getQuestionsArrayApi(pageSize);
  // eslint-disable-next-line
  if (response.type == "response") {
    dispatch(getQuestionsArrayAction(response.data.items));
  } else {
    console.error(response.data);
  }
};
