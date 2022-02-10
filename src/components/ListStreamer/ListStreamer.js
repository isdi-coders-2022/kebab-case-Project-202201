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
        return <FavoriteStreamer key={streamer} streamerInfo={{ streamer }} />;
      })}
    </Container>
  );
};

ListStreamer.prototype = {
  streamerInfo: propTypes.object,
};

export default ListStreamer;
