import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useTwitchAPI from "../../hooks/useTwitchAPI";

const ArticleCard = styled.article`
  margin: 20px;
  left: 15px;
  top: 15px;
  background: #efeff1;
  display: flex;
  flex-direction: column;
`;

const RoundedImage = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  left: 10px;
  top: 10px;
`;

const BroadcasterType = styled.p`
  width: 70px;
  height: 18px;
  padding-left: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;

  text-align: left;
  letter-spacing: 0.4px;
  background-color: #ffffff;
  color: #5d16c6;
`;

const NameStreamer = styled.p`
  padding-top: 20px;
  padding-left: 10px;
  text-align: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 16px;

  letter-spacing: 0.4px;

  color: #5d16c6;
`;

const TwitchChannel = styled.p`
  padding-left: 10px;
  text-align: right;
  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;

  text-align: left;
  letter-spacing: 0.4px;

  color: #0fa60c;
`;
const CreatedAt = styled.p`
  padding-top: 10px;
  padding-right: 10px;
  text-align: left;

  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: #000000;
`;
const StreamerDescription = styled.p`
  padding-top: 10px;
  padding-right: 10px;
  text-align: left;

  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: #000000;
`;

const ViewCount = styled.p`
  padding-top: 10px;
  padding-right: 10px;
  text-align: left;

  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: #000000;
`;

const Detail = ({ streamerId }) => {
  const [info, setInfo] = useState([]);
  const { fetchStreamerInfo } = useTwitchAPI();

  useEffect(() => {
    async function callStreamInfo() {
      const infoStreamer = await fetchStreamerInfo(streamerId);
      setInfo(infoStreamer[0]);
    }
    callStreamInfo();
  }, [fetchStreamerInfo, streamerId]);

  return (
    <>
      <ArticleCard className="streamerDetail">
        <RoundedImage
          className="streamerPicture"
          alt="Streamer"
          src={info.profile_image_url}
        ></RoundedImage>
        <NameStreamer className="displayName">
          Name: {info.display_name}
        </NameStreamer>
        <TwitchChannel className="twitchChannel">
          Twitch Channel: {info.twitchChannel}
        </TwitchChannel>
        <StreamerDescription className="StreamerDescription">
          Description: {info.description}
        </StreamerDescription>
        <ViewCount>View Count: </ViewCount>
        <BroadcasterType className="broadcasterType">
          Contract: {info.broadcaster_type}
        </BroadcasterType>
        <CreatedAt className="created_at">
          On Twitch for: {info.created_at}
        </CreatedAt>
      </ArticleCard>
    </>
  );
};

Detail.propTypes = {
  display_name: PropTypes.string,
  broadcaster_type: PropTypes.string,
  description: PropTypes.string,
  profile_image_url: PropTypes.string,
  actionClick: PropTypes.func,
};

export default Detail;
