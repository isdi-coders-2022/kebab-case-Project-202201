import { useContext } from "react";
import MainPageContext from "../store/contexts/MainPageContext";
import { loadStreamerList } from "../store/actions/mainPage/actionCreators";

const useTwitchAPI = () => {
  const streamsListEndpoint = "https://api.twitch.tv/helix/streams";
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

  async function dispatchStreamerList() {
    const data = await fetchStreamInfo();
    const action = loadStreamerList(data);
    dispatch(action);
  }

  return {
    fetchStreamInfo,
    dispatchStreamerList,
  };
};

export default useTwitchAPI;
