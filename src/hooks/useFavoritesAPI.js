import { useCallback } from "react";

const useFavoritesAPI = () => {
  const favoritesEndpoint =
    "https://shawarma-streaming.herokuapp.com/streamers";

  const getAllFavorites = useCallback(async () => {
    const response = await fetch(favoritesEndpoint);
    return await response.json();
  }, []);

  const getFavorite = useCallback(async (id) => {
    const url = `${favoritesEndpoint}/${id}`;
    const packInfo = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: await JSON.stringify(),
    };
    const response = await fetch(url, packInfo);
    return await response.json();
  }, []);

  const sendStreamer = useCallback(async (streamer) => {
    const packInfo = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: await JSON.stringify(streamer),
    };
    const response = await fetch(favoritesEndpoint, packInfo);
    return await response.json();
  }, []);

  const modifyStreamer = useCallback(async (id, data) => {
    const url = `${favoritesEndpoint}/${id}`;
    const packInfo = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: await JSON.stringify(data),
    };

    const response = await fetch(url, packInfo);
    return await response.json();
  }, []);

  const deleteStreamer = useCallback(async (id) => {
    const url = `${favoritesEndpoint}/${id}`;
    const packInfo = {
      method: "DELETE",
    };

    const response = await fetch(url, packInfo);
    return await response.json();
  }, []);

  return {
    getAllFavorites,
    getFavorite,
    sendStreamer,
    modifyStreamer,
    deleteStreamer,
  };
};

export default useFavoritesAPI;
