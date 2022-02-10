import { useCallback, useContext } from "react";
import MainPageContext from "../store/contexts/MainPageContext";
import { loadStreamerList } from "../store/actions/mainPage/actionCreators";

const useTwitchAPI = () => {
  const streamsListEndpoint = "https://api.twitch.tv/helix/streams";
  const emotesEndpoint = "https://api.twitch.tv/helix/chat/emotes";

  const { dispatch } = useContext(MainPageContext);

  async function fetchStreamInfo() {
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
  }

  const dispatchStreamerList = useCallback(async () => {
    const data = await fetchStreamInfo();
    const action = loadStreamerList(data);
    dispatch(action);
  }, [dispatch]);

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

  return {
    fetchStreamInfo,
    dispatchStreamerList,
    loadEmotes,
  };
};

export default useTwitchAPI;
