import axios from "../axios";

export const getVideos = async (tags: string[] = [], search: string = "") => {
  let queryString = "";
  if (tags?.length !== 0) {
    queryString += tags?.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (search !== "") {
    queryString += `&q=${search}`;
  }
  const response = await axios.get(`/videos/?${queryString}`);
  //const response = await axios.get(`/videos/`);
  return response.data;
};
