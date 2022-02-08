import styled from "styled-components";

const StreamerArticle = styled.article`
  background: ${(props) => props.theme.body};
`;

const FavStreamerHeader = styled.header`
  border-bottom: 5px solid hotpink;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  & > * {
    height: 100%;
  }
  & :nth-child(2) {
    flex: 1 1 auto;
  }
`;

const FavoriteStreamer = ({ streamerInfo }) => {
  // const { variable } = useContext(ThemeContextProvider);
  return (
    <StreamerArticle>
      <FavStreamerHeader>
        <img
          src={streamerInfo.profile_image_url}
          alt={`${streamerInfo.display_name}`}
        ></img>
        <div>
          {/* <div>{variable}</div> */}
          <h2>{streamerInfo.display_name}</h2>
        </div>
        <button>shish-kebab</button>
      </FavStreamerHeader>
      <div>Reel Container</div>
    </StreamerArticle>
  );
};
export default FavoriteStreamer;
