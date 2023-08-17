import axios from "axios";
import { movieAccessToken } from "./movieApiKey";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization: "bearer " + movieAccessToken,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
