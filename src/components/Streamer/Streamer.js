import styled from "styled-components";
import PropTypes from "prop-types";

const ArticleCard = styled.article`
  width: 345px;
  height: 121px;
  left: 15px;
  top: 15px;
  background: #efeff1;
  display: flex;
  flex-direction: row;
`;

const ColumnCard = styled.div``;

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
  width: 60px;
  height: 18px;
  left: 30px;
  top: -20px;

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

const DurumIcon = styled.img`
  position: relative;
  width: 50px;
  height: 50px;
  left: 320px;
  bottom: 70px;
`;

/* color: ${(props) => props.theme.secondaryColor}; */

const Streamer = ({ props }) => {
  const durumIcon = "./img/durumFavDown.png";
  return (
    <>
      <ArticleCard className="streamerMain">
        <ColumnCard>
          <RoundedImage
            className="streamerPicture"
            alt="Streamer"
            src={props.profile_image_url}
          ></RoundedImage>
          <BroadcasterType className="broadcasterType">
            {props.broadcaster_type}
          </BroadcasterType>
        </ColumnCard>
        <ColumnCard>
          <p className="displayName">{props.display_name}</p>
          <p className="onlineType">{props.type}</p>
          <p className="StreamerDescription">{props.description}</p>
        </ColumnCard>
      </ArticleCard>
      <DurumIcon
        className="myFavoriteIcon"
        alt="Durum"
        src={durumIcon}
      ></DurumIcon>
    </>
  );
};

Streamer.propTypes = {
  id: PropTypes.number,
  display_name: PropTypes.string.isRequired,
  broadcaster_type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  profile_image_url: PropTypes.string.isRequired,
  //actionClick: propTypes.func,
};

export default Streamer;
