import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_CLIPLIST}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: "FastProudDonutHotPokket-hFCTkRF0zlxNI2DL",
            url: "https://clips.twitch.tv/FastProudDonutHotPokket-hFCTkRF0zlxNI2DL",
            embed_url:
              "https://clips.twitch.tv/embed?clip=FastProudDonutHotPokket-hFCTkRF0zlxNI2DL",
            broadcaster_id: "431671263",
            broadcaster_name: "SorYuGa",
            creator_id: "747623159",
            creator_name: "DeisyTV",
            video_id: "1248695522",
            game_id: "18122",
            language: "es",
            title: "Bola de alterac PepoClown",
            view_count: 11,
            created_at: "2021-12-31T09:38:54Z",
            thumbnail_url:
              "https://clips-media-assets2.twitch.tv/AT-cm%7CEb7DhYRQk5ERdM5cTSNgyw-preview-480x272.jpg",
            duration: 49.5,
          },
          {
            id: "RefinedSparklingLettuceDAESuppy-STJOLpsssNypgT2I",
            url: "https://clips.twitch.tv/RefinedSparklingLettuceDAESuppy-STJOLpsssNypgT2I",
            embed_url:
              "https://clips.twitch.tv/embed?clip=RefinedSparklingLettuceDAESuppy-STJOLpsssNypgT2I",
            broadcaster_id: "431671263",
            broadcaster_name: "SorYuGa",
            creator_id: "160708123",
            creator_name: "ArDyMG",
            video_id: "1238093517",
            game_id: "18122",
            language: "es",
            title: "sota la taula té la mà maria",
            view_count: 11,
            created_at: "2021-12-19T23:03:18Z",
            thumbnail_url:
              "https://clips-media-assets2.twitch.tv/AT-cm%7CRLlDyUkyTi6bLLDcqYE9iA-preview-480x272.jpg",
            duration: 30,
          },
        ],
      })
    );
  }),
  rest.get(`${process.env.REACT_APP_FAVORITES}`, (req, res, ctx) => {
    res(
      ctx.status(200),
      ctx.json([
        { id: 89, name: "wololoo" },
        { id: 45, name: "wililii" },
      ])
    );
  }),
  rest.get(`${process.env.REACT_APP_STREAMLIST}`, (req, res, ctx) => {
    res(
      ctx.status(200),
      ctx.json([
        { id: 89, name: "wololoo" },
        { id: 45, name: "wililii" },
      ])
    );
  }),
  rest.get(`${process.env.REACT_APP_EMOTEST}`, (req, res, ctx) => {
    res(
      ctx.status(200),
      ctx.json([
        { id: 89, name: "wololoo" },
        { id: 45, name: "wililii" },
      ])
    );
  }),

  rest.get(`${process.env.REACT_APP_STREAMERS}`, (req, res, ctx) => {
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 89,
          name: "wololoo",
          login: "wululuu",
          broadcaser_type: "partner",
        },
        {
          id: 45,
          name: "wililii",
          login: "wululuu",
          broadcaser_type: "partner",
        },
      ])
    );
  }),
];
