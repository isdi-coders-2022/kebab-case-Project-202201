import styled from "styled-components";
import PropTypes from "prop-types";
import ButtonImage from "../ButtonImage/ButtonImage";
import useFavoritesAPI from "../../hooks/useFavoritesAPI";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ArticleCard = styled.article`
  width: auto;
  margin: 10px;
  height: 121px;
  top: 15px;
  background: ${(props) => props.theme.alt};
  display: flex;
  flex-direction: row;
`;

const ColumnCard1 = styled.div``;

const ColumnCard2 = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  justify-content: space-between;
  width: 100%;
  height: 100px;
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
  background-color: ${(props) => props.theme.accent};
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

  color: ${(props) => props.theme.accent};
`;

const OnlineType = styled.p`
  padding-right: 10px;
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
  margin-bottom: 10px;
  margin-left: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: ${(props) => props.theme.descriptionColor};
`;

const Streamer = ({ streamerInfo }) => {
  const [isClicked, setIsClicked] = useState(false);

  const info = streamerInfo;

  const { sendStreamer } = useFavoritesAPI();

  const addToFavs = () => {
    const newStreamer = {
      id: info.id,
      user_id: info.user_id,
      display_name: info.display_name,
      profile_image_url: info.profile_image_url,
    };
    sendStreamer(newStreamer);
    setIsClicked(!isClicked);
  };

  let navigate = useNavigate();
  const viewDetails = () => {
    navigate(`/info/${streamerInfo.id}`);
  };

  return (
    streamerInfo && (
      <ArticleCard className="streamerMain">
        <ColumnCard1>
          <RoundedImage
            className="streamerPicture"
            alt="Streamer"
            src={info.profile_image_url}
          ></RoundedImage>
          <BroadcasterType className="broadcasterType">
            {info.broadcaster_type}
          </BroadcasterType>
        </ColumnCard1>
        <ColumnCard2 onClick={viewDetails}>
          <NameStreamer className="displayName">
            {`${info.display_name}`}
          </NameStreamer>
          <OnlineType className="onlineType">{info.type}</OnlineType>

          <StreamerDescription className="StreamerDescription">
            {info.description.length > 100
              ? info.description.slice(0, 99) + "..."
              : info.description}
          </StreamerDescription>
        </ColumnCard2>
        {!isClicked ? (
          <ButtonImage
            favClass={"newClass"}
            image={"img/favDown.png"}
            imageAlt={"shawarma icon"}
            actionOnClick={addToFavs}
          />
        ) : (
          <ButtonImage
            favClass={"newClass"}
            image={"img/favUp.png"}
            imageAlt={"shawarma icon"}
            actionOnClick={addToFavs}
          />
        )}
      </ArticleCard>
    )
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
