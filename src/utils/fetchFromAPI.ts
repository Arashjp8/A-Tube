import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "29b62418f8mshdcb91040cb64a83p1855b2jsnedcf7c3704e5",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export default fetchFromAPI;
