import axios from "../axios";

export const getVideo = async (id: number) => {
  const response = await axios.get(`/videos/${id}`);

  return response.data;
};
