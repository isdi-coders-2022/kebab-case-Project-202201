import styled from "styled-components";
import propTypes from "prop-types";
import ClipCarousel from "../ClipCarousel/ClipCarousel";

const StreamerArticle = styled.article`
  background: ${(props) => props.theme.alt};
  padding: 5px 7px;
`;

const FavStreamerHeader = styled.header`
  border-bottom: 5px solid ${(props) => props.theme.accent};
  padding: 0;
  display: flex;
  padding: 0px;
  justify-content: space-between;
  & > * {
    height: 100%;
  }
  & > :nth-child(2) {
    padding-left: 15px;
    flex: 1 1 auto;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
  }
  & h2 {
    color: ${(props) => props.theme.accent};
    display: inline-block;
    padding-bottom: 7px;
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    padding-right: 10px;
  }
  & img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }
  & streamer-name-block {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

const FavoriteStreamer = ({ streamerInfo }) => {
  return (
    <StreamerArticle>
      <FavStreamerHeader>
        <img
          src={streamerInfo.profile_image_url}
          alt={`${streamerInfo.display_name}`}
        ></img>
        <div>
          <p>online/offline</p>
          <div className="streamer-name-block">
            <h2>{streamerInfo.display_name}</h2>
            <button>edit button</button>
          </div>
        </div>
        <button>shish-kebab</button>
      </FavStreamerHeader>
      <ClipCarousel streamerId={streamerInfo.id} />
    </StreamerArticle>
  );
};

FavoriteStreamer.propTypes = {
  streamerInfo: propTypes.shape({
    display_name: propTypes.string.isRequired,
    profile_image_url: propTypes.string.isRequired,
  }),
};
export default FavoriteStreamer;
