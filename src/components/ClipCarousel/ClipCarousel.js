import propTypes from "prop-types";
import { useMemo } from "react";

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

  const clips = useMemo(() => {
    return getClipList();
  }, []);
  // let clips = "";
  // (async () => {
  //   clips = await getClipList();
  //   console.log(clips);
  // })();

  // const clips = await(async () => {
  //   return await getClipList();
  // });

  const clips2 = [
    {
      id: "CogentTangentialPoultryBudStar",
      url: "https://clips.twitch.tv/CogentTangentialPoultryBudStar",
      embed_url:
        "https://clips.twitch.tv/embed?clip=CogentTangentialPoultryBudStar",
      broadcaster_id: "431671263",
      broadcaster_name: "SorYuGa",
      creator_id: "506455143",
      creator_name: "dominium23",
      video_id: "",
      game_id: "21779",
      language: "es",
      title: "Explicaciòn de nickname",
      view_count: 3,
      created_at: "2021-02-08T19:44:10Z",
      thumbnail_url:
        "https://clips-media-assets2.twitch.tv/AT-cm%7C1042354034-preview-480x272.jpg",
      duration: 25.7,
    },
    {
      id: "ManlyRefinedCobraCoolStoryBob-NT37-9BjNBtJ0-GS",
      url: "https://clips.twitch.tv/ManlyRefinedCobraCoolStoryBob-NT37-9BjNBtJ0-GS",
      embed_url:
        "https://clips.twitch.tv/embed?clip=ManlyRefinedCobraCoolStoryBob-NT37-9BjNBtJ0-GS",
      broadcaster_id: "431671263",
      broadcaster_name: "SorYuGa",
      creator_id: "402827853",
      creator_name: "xxWild_BearDxx",
      video_id: "1290042389",
      game_id: "490100",
      language: "es",
      title:
        "SOY CRISTIANO, SI, QUE? QUE PASA? | LOST ARK, HABLEMOS | TUS PREGUNTAS AQUÍ | FULL TIME STREAMER DIA #12| !commands [ES/FR/EN]",
      view_count: 2,
      created_at: "2022-02-07T13:21:56Z",
      thumbnail_url:
        "https://clips-media-assets2.twitch.tv/44631911180-offset-14628-preview-480x272.jpg",
      duration: 28,
    },
    {
      id: "CautiousInquisitiveBibimbapResidentSleeper-futzCDyLr3fBL8-x",
      url: "https://clips.twitch.tv/CautiousInquisitiveBibimbapResidentSleeper-futzCDyLr3fBL8-x",
      embed_url:
        "https://clips.twitch.tv/embed?clip=CautiousInquisitiveBibimbapResidentSleeper-futzCDyLr3fBL8-x",
      broadcaster_id: "431671263",
      broadcaster_name: "SorYuGa",
      creator_id: "140252285",
      creator_name: "theslowhand77",
      video_id: "1283218395",
      game_id: "18122",
      language: "es",
      title: "ABUSO DE PODER :c",
      view_count: 2,
      created_at: "2022-02-01T10:49:16Z",
      thumbnail_url:
        "https://clips-media-assets2.twitch.tv/AT-cm%7CZ3VUXn7rcwg8i693wS_PsQ-preview-480x272.jpg",
      duration: 30.3,
    },
  ];
  return (
    <ul>
      {clips.map((clip) => {
        return (
          <li key={clip.id}>
            <iframe
              src={""}
              width={"250"}
              allowFullScreen={true}
              autoPlay={false}
              title={clip.title}
            ></iframe>
          </li>
        );
      })}
    </ul>
  );
  // return (
  //   <ul>
  //     {clips.map((clip) => {
  //       return (
  //         <li key={clip.id}>
  //           <iframe
  //             src={`${clip.embed_url}&parent=localhost`}
  //             width={"250"}
  //             allowFullScreen={true}
  //             autoPlay={false}
  //             title={clip.title}
  //           ></iframe>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
};

export default ClipCarousel;
