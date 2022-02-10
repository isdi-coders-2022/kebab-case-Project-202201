import styled from "styled-components";
import PropTypes from "prop-types";

const ArticleCard = styled.article``;

const RoundedImage = styled.img``;

const BroadcasterType = styled.p``;

const NameStreamer = styled.p``;

const TwitchChannel = styled.p``;

const StreamerDescription = styled.p``;

const ViewCount = styled.p``;

const Detail = ({ streamerInfo }) => {
  return (
    <>
      <ArticleCard
        className="streamerDetail"
        onClick={streamerInfo.actionOnClick}
      >
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
