import FavoriteStreamer from "../FavoriteStreamer/FavoriteStreamer";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  background-color: #eaeae1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ListStreamer = ({ streamers }) => {
  return (
    <Container className="container">
      {streamers.map((streamer) => {
        return <FavoriteStreamer key={streamer.id} streamerInfo={streamer} />;
      })}
    </Container>
  );
};

ListStreamer.propTypes = {
  streamer: propTypes.shape({
    id: propTypes.number.isRequired,
    display_name: propTypes.string.isRequired,
    profile_image_url: propTypes.string,
  }),
};

export default ListStreamer;
