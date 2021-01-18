//Base URL
const BASE_URL = "https://api.rawg.io/api/";

//Getting current month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting current day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Getting current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular, Upcoming and New Games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${BASE_URL}${popularGames}`;
export const upcomingGamesURL = () => `${BASE_URL}${upcomingGames}`;
export const newGamesURL = () => `${BASE_URL}${newGames}`;

//Game Details
export const gameDetailsURL = (gameId) => `${BASE_URL}games/${gameId}`;

//Game Screenshots
export const gameScreenshotURL = (gameId) =>
  `${BASE_URL}games/${gameId}/screenshots`;

//Search Game
export const searchGameURL = (gameName) =>
  `${BASE_URL}games?search=${gameName}&page_size=9`;
