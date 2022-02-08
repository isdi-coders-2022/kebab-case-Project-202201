import styled from "styled-components";
import PropTypes from "prop-types";

const ArticleCard = styled.article`
  width: calc(100% - 40px);
  margin: auto;
  height: 121px;
  left: 15px;
  top: 15px;
  background: #efeff1;
  display: flex;
  flex-direction: row;
`;

const ColumnCard1 = styled.div``;

const ColumnCard2 = styled.div`
  padding-left: 15px;
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
  position: relative;
  width: 70px;
  height: 18px;
  left: 25px;
  bottom: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.4px;
  background-color: #5d16c6;
  color: #ffffff;
`;

const NameStreamer = styled.p`
  padding-top: 10px;
  padding-right: 10px;
  text-align: right;
  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 16px;

  letter-spacing: 0.4px;

  color: #5d16c6;
`;

const OnlineType = styled.p`
  padding-right: 10px;
  text-align: right;
  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;

  text-align: right;
  letter-spacing: 0.4px;

  color: #0fa60c;
`;

const StreamerDescription = styled.p`
  padding-top: 10px;
  padding-right: 10px;
  text-align: right;

  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: #000000;
`;

const Streamer = ({
  props: {
    profile_image_url,
    broadcaster_type,
    display_name,
    type,
    description,
  },
  actionOnClick,
}) => {
  return (
    <>
      <ArticleCard className="streamerMain" onClick={actionOnClick}>
        <ColumnCard1>
          <RoundedImage
            className="streamerPicture"
            alt="Streamer"
            src={profile_image_url}
          ></RoundedImage>
          <BroadcasterType className="broadcasterType">
            {broadcaster_type}
          </BroadcasterType>
        </ColumnCard1>
        <ColumnCard2>
          <NameStreamer className="displayName">{display_name}</NameStreamer>
          <OnlineType className="onlineType">{type}</OnlineType>
          <StreamerDescription className="StreamerDescription">
            {description.length > 100
              ? description.slice(0, 99) + "..."
              : description}
          </StreamerDescription>
        </ColumnCard2>
      </ArticleCard>
    </>
  );
};

Streamer.propTypes = {
  id: PropTypes.number,
  display_name: PropTypes.string,
  broadcaster_type: PropTypes.string,
  description: PropTypes.string,
  profile_image_url: PropTypes.string,
  actionClick: PropTypes.func,
};

export default Streamer;
