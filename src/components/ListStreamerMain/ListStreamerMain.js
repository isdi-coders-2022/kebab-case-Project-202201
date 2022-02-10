import Streamer from "../Streamer/Streamer";
import { useEffect, useState } from "react";
import useTwitchAPI from "../../hooks/useTwitchAPI";

const ListStreamerMain = () => {
  const [streamerList, setStreamerList] = useState([]);
  const { fetchStreamerIdList, fetchStreamersFromId } = useTwitchAPI();

  useEffect(() => {
    async function callStreamInfo() {
      const idList = await fetchStreamerIdList();
      const s = await fetchStreamersFromId(idList);
      setStreamerList(s);
    }
    callStreamInfo();
  }, [fetchStreamerIdList, fetchStreamersFromId]);

  return (
    <>
      {streamerList.length > 0 &&
        streamerList.map((streamer) => {
          return <Streamer streamerInfo={streamer} key={streamer[0].id} />;
        })}
    </>
  );
};

export default ListStreamerMain;
