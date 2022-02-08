import FavoriteStreamer from "../FavoriteStreamer/FavoriteStreamer";
import styled from "styled-components";

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
        return <FavoriteStreamer key={streamers} streamerInfo={streamers} />;
      })}
    </Container>
  );
};

export default ListStreamer;
