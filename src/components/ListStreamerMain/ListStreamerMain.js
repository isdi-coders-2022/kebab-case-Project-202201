import Streamer from "../Streamer/Streamer";
import { useContext, useEffect } from "react";
import useTwitchAPI from "../../hooks/useTwitchAPI";
import MainPageContext from "../../store/contexts/MainPageContext";
import { loadStreamerList } from "../../store/actions/mainPage/actionCreators";

const ListStreamerMain = () => {
  //const [streamerList, setStreamerList] = useState([]);
  const { streamerList, dispatchStreamerList } = useContext(MainPageContext);
  const { fetchStreamerIdList, fetchStreamersFromId } = useTwitchAPI();

  useEffect(() => {
    async function callStreamInfo() {
      const idList = await fetchStreamerIdList();
      const streamers = await fetchStreamersFromId(idList);
      const action = loadStreamerList(streamers);
      dispatchStreamerList(action);
    }

    callStreamInfo();
  }, [dispatchStreamerList, fetchStreamerIdList, fetchStreamersFromId]);

  return (
    <>
      {streamerList.length > 0 &&
        streamerList.map((streamer) => {
          return <Streamer streamerInfo={streamer} key={streamer.id} />;
        })}
    </>
  );
};

export default ListStreamerMain;
