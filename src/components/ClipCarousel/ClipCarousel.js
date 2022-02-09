import propTypes from "prop-types";

const ClipCarousel = ({ streamerId }) => {
  async function getClipList() {
    const url = `https://api.twitch.tv/helix/clips?broadcaster_id=${streamerId}`;

    const packInfo = {
      method: "GET",
      headers: {
        Authorization: "Bearer 2skh3pxj2nk4q2x0mp7nvd479u7zvj",
        "Client-Id": "7apyztvt5kmx8o1ateivp57mxe17ml",
      },
    };

    const response = await fetch(url, packInfo);
    const clipListJson = await response.json();
    const clipList = clipListJson.data;
    return clipList
  }

  
  (async () => {
    await getClipList();
  })();

  return(

    <
  )
};

export default ClipCarousel;
