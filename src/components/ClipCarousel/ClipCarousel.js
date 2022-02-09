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
    return clipList;
  }
  // let clips = "";
  // (async () => {
  //   clips = await getClipList();
  //   console.log(clips);
  // })();

  const clips = [
    {
      id: "45463043693",
      user_id: "190835892",
      user_login: "lck_korea",
      user_name: "LCK_Korea",
      game_id: "21779",
      game_name: "League of Legends",
      type: "live",
      title: "2022 LCK 스프링 스플릿 | T1 vs HLE - DRX vs KT",
      viewer_count: 85894,
      started_at: "2022-02-09T07:15:25Z",
      language: "ko",
      thumbnail_url:
        "https://static-cdn.jtvnw.net/previews-ttv/live_user_lck_korea-{width}x{height}.jpg",
      tag_ids: [
        "ab2975e3-b9ca-4b1a-a93e-fb61a5d5c3a4",
        "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
      ],
      is_mature: false,
    },
    {
      id: "44651404140",
      user_id: "65171890",
      user_login: "rainbow6",
      user_name: "Rainbow6",
      game_id: "460630",
      game_name: "Tom Clancy's Rainbow Six Siege",
      type: "live",
      title:
        "Ninjas in Pyjamas vs. Team Empire // Six Invitational 2022 – Group Stage – Day 2 - Stream A",
      viewer_count: 68130,
      started_at: "2022-02-09T08:09:04Z",
      language: "en",
      thumbnail_url:
        "https://static-cdn.jtvnw.net/previews-ttv/live_user_rainbow6-{width}x{height}.jpg",
      tag_ids: [
        "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
        "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
        "c2542d6d-cd10-4532-919b-3d19f30a768b",
      ],
      is_mature: true,
    },
  ];
  return (
    <ul>
      {clips.map((clip) => {
        return (
          <li key={clip.id}>
            <iframe
              src={`https://player.twitch.tv/?video=v${clip.video_id}&parent=localhost`}
              height={"720"}
              width={"1280"}
              allowFullScreen={"true"}
              autoplay={"false"}
              title={clip.title}
            ></iframe>
          </li>
        );
      })}
    </ul>
  );
};

export default ClipCarousel;
