import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  //Fetch data with Axios
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (gameName) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(gameName));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
