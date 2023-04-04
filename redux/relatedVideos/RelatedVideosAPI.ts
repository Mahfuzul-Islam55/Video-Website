import axios from "../axios";

interface props {
  tags: string[];
  id: number;
}
export const getRelatedVideos = async (tags?: string[], id?: number) => {
  const limit = 5;
  const queryString = tags
    ? tags?.map((tag) => `tags_like=${tag}`).join("&") +
      `&id_ne=${id}&limit=${limit}`
    : `&id_ne=${id}&limit=${limit}`;
  const response = await axios.get(`./videos?${queryString}`);

  return response.data;
};
