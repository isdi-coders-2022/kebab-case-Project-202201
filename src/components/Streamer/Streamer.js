/* import styled from "styled-components";

const hola = styled.hola``; */

const Streamer = ({ props }) => {
  const durumIcon = "./img/durumFavDown.png";
  return (
    <article className="streamerMain">
      <img
        className="streamerPicture"
        alt="Streamer"
        src={props.profile_image_url}
      ></img>
      <p className="broadcasterType">{props.broadcaster_type}</p>
      <p className="displayName">{props.display_name}</p>
      <p className="onlineType">{props.type}</p>
      <p className="StreamerDescription">{props.description}</p>
      <img className="myFavoriteIcon" alt="Durum" src={durumIcon}></img>
    </article>
  );
};

export default Streamer;
