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
        Authorization: "Bearer 2skh3pxj2nk4q2x0mp7nvd479u7zvj",
        "Client-Id": "7apyztvt5kmx8o1ateivp57mxe17ml",
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
    console.log(action);
  }

  return {
    fetchStreamInfo,
    dispatchStreamerList,
  };
};

export default useTwitchAPI;
