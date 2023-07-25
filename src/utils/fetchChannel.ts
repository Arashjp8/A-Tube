import axios from "axios";

interface Params {
  maxResults: number;
  part: string;
  id: string;
}

let params: Params = {
  maxResults: 1,
  part: "snippet,statistics",
  id: "",
};

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchChannel = async (url: string, channelId: string) => {
  params = { ...params, id: channelId };
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export default fetchChannel;
