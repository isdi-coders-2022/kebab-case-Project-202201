import styled from "styled-components";
import propTypes from "prop-types";

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
  & :nth-child(2) {
    flex: 1 1 auto;
  }
  & h2 {
    color: ${(props) => props.theme.accent};
  }
  & img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
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
          <div>
            <h2>{streamerInfo.display_name}</h2>
            <button>edit button</button>
          </div>
        </div>
        <button>shish-kebab</button>
      </FavStreamerHeader>
      <div>Reel Container</div>
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
