const useFavoritesAPI = () => {
  const favoritesEndpoint =
    "https://shawarma-streaming.herokuapp.com/streamers";

  const getAllFavorites = async () => {
    const response = await fetch(favoritesEndpoint);
    const data = await response.json();
    return data;
  };

  const sendStreamer = async (streamer) => {
    const packInfo = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: await JSON.stringify(streamer),
    };
    const response = await fetch(favoritesEndpoint, packInfo);
    return await response.json();
  };

  const modifyStreamer = async (id, data) => {
    const url = `${favoritesEndpoint}/${id}`;
    const packInfo = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: await JSON.stringify(data),
    };

    const response = await fetch(url, packInfo);
    return await response.json();
  };

  return { getAllFavorites, sendStreamer, modifyStreamer };
};

export default useFavoritesAPI;
