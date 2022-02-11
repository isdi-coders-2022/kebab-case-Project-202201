import { useCallback, useContext } from "react";
import MainPageContext from "../store/contexts/MainPageContext";
import { loadStreamerList } from "../store/actions/mainPage/actionCreators";

const useTwitchAPI = () => {
  const streamsListEndpoint = "https://api.twitch.tv/helix/streams";
  const emotesEndpoint = "https://api.twitch.tv/helix/chat/emotes";
  const clipListEndpoint = "https://api.twitch.tv/helix/clips";
  const infoStreamer = `https://api.twitch.tv/helix/users`;

  const { dispatch } = useContext(MainPageContext);

  const fetchStreamInfo = useCallback(async () => {
    const packageInfo = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_PASS}`,
        "Client-Id": `${process.env.REACT_APP_ID}`,
      },
    };
    const response = await fetch(streamsListEndpoint, packageInfo);
    const streamerListJson = await response.json();
    return streamerListJson.data;
  }, []);

  const dispatchStreamerList = useCallback(async () => {
    const data = await fetchStreamInfo();
    const action = loadStreamerList(data);
    dispatch(action);
  }, [dispatch, fetchStreamInfo]);

  const loadEmotes = useCallback(async (streamerId) => {
    const url = `${emotesEndpoint}?broadcaster_id=${streamerId}`;
    const packageInfo = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_PASS}`,
        "Client-Id": `${process.env.REACT_APP_ID}`,
      },
    };

    const response = await fetch(url, packageInfo);
    const streamerEmoteListJson = await response.json();
    return streamerEmoteListJson.data;
  }, []);

  const fetchClipList = useCallback(async (streamerId) => {
    const url = `${clipListEndpoint}?broadcaster_id=${streamerId}`;
    const packInfo = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_PASS}`,
        "Client-Id": `${process.env.REACT_APP_ID}`,
      },
    };
    const response = await fetch(url, packInfo);
    const clipListJson = await response.json();
    return clipListJson.data.slice(0, 5);
  }, []);

  const fetchStreamerInfo = useCallback(
    async (streamerId) => {
      const url = `${infoStreamer}?id=${streamerId}`;
      const packInfo = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PASS}`,
          "Client-Id": `${process.env.REACT_APP_ID}`,
        },
      };
      const response = await fetch(url, packInfo);
      const streamerJson = await response.json();

      return streamerJson.data;
    },
    [infoStreamer]
  );

  const fetchStreamerIdList = useCallback(async () => {
    const streamerList = await fetchStreamInfo();
    const streamerIdList = streamerList.map((streamer) => streamer.user_id);
    return streamerIdList;
  }, [fetchStreamInfo]);

  const fetchStreamersFromId = useCallback(
    async (idList) => {
      const promiseList = idList.map((id) => fetchStreamerInfo(id));
      const solvedPromises = await Promise.all(promiseList);
      //const dataList = solvedPromises.map((promise) => promise.data);
      return solvedPromises;
    },
    [fetchStreamerInfo]
  );

  return {
    fetchStreamInfo,
    dispatchStreamerList,
    loadEmotes,
    fetchClipList,
    fetchStreamerInfo,
    fetchStreamerIdList,
    fetchStreamersFromId,
  };
};

export default useTwitchAPI;
