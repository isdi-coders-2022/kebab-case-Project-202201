const FavoriteStreamer = ({ streamerInfo }) => {
  return (
    <article>
      <img
        src={streamerInfo.profile_image_url}
        alt={`${streamerInfo.display_name}`}
      ></img>
      <h2>{streamerInfo.display_name}</h2>
    </article>
  );
};
export default FavoriteStreamer;
