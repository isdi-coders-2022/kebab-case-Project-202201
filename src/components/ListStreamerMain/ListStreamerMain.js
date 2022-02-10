import Streamer from "../Streamer/Streamer";
import styled from "styled-components";

const Container = styled.div`
  background-color: #eaeae1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ListStreamerMain = ({ streamers }) => {
  return (
    <Container className="container">
      {streamers.map((streamer) => {
        return <Streamer key={streamer} streamerInfo={streamer} />;
      })}
    </Container>
  );
};

export default ListStreamerMain;
