import FavoriteStreamer from "../FavoriteStreamer/FavoriteStreamer";
import styled from "styled-components";

const Container = styled.div`
  background-color: #eaeae1;
  display: flex;
  flex-wrap: wrap;
`;

const ListStreamer = () => {
  const streamers = [1, 2, 3, 4, 5];

  return (
    <Container>
      {streamers.map((streamer) => {
        return <FavoriteStreamer key={streamers} streamerInfo={streamers} />;
      })}
    </Container>
  );
};

export default ListStreamer;
