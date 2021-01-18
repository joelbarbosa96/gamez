import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  //LOADING DISPATCH
  dispatch({
    type: "LOADING_DETAIL",
  });

  //Fetch data with Axios
  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotsData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenshots: screenshotsData.data,
    },
  });
};
