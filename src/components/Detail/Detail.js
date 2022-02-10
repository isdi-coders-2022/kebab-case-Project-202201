import styled from "styled-components";
import PropTypes from "prop-types";

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

const Detail = ({ streamerInfo, actionOnClick }) => {
  return (
    <>
      <ArticleCard className="streamerDetail" onClick={actionOnClick}>
        <RoundedImage
          className="streamerPicture"
          alt="Streamer"
          src={streamerInfo.profile_image_url}
        ></RoundedImage>
        <NameStreamer className="displayName">
          Name: {streamerInfo.display_name}
        </NameStreamer>
        <TwitchChannel className="twitchChannel">
          Twitch Channel: {streamerInfo.twitchChannel}
        </TwitchChannel>
        <StreamerDescription className="StreamerDescription">
          Description:{" "}
          {streamerInfo.description.length > 100
            ? streamerInfo.description.slice(0, 99) + "..."
            : streamerInfo.description}
        </StreamerDescription>
        <ViewCount>View Count: </ViewCount>
        <BroadcasterType className="broadcasterType">
          Contract: {streamerInfo.broadcaster_type}
        </BroadcasterType>
        <NameStreamer className="displayName">
          On Twitch for: {streamerInfo.display_name}
        </NameStreamer>
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
