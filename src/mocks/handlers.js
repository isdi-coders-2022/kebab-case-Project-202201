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

  rest.get(`${process.env.REACT_APP_STREAMLIST}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "45492269293",
          user_id: "156037856",
          user_login: "fextralife",
          user_name: "Fextralife",
          game_id: "490100",
          game_name: "LOST ARK",
          type: "live",
          title: "🔥!DROPS🔥!CLASS !GUIDES !WIKI Launch Day with CAS!",
          viewer_count: 101303,
          started_at: "2022-02-11T22:34:55Z",
          language: "en",
          thumbnail_url:
            "https://static-cdn.jtvnw.net/previews-ttv/live_user_fextralife-{width}x{height}.jpg",
          tag_ids: [
            "c2839af5-f1d2-46c4-8edc-1d0bfbd85070",
            "c2542d6d-cd10-4532-919b-3d19f30a768b",
            "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
          ],
          is_mature: false,
        },
        {
          id: "45495006877",
          user_id: "71092938",
          user_login: "xqcow",
          user_name: "xQcOW",
          game_id: "91423",
          game_name: "Dark Souls II",
          type: "live",
          title:
            "NEW HOUSE (#2947854) HAH! INSANE SKELETAL WARLORDIAN MOUTAIN KING JUICELORD COMES BACK TO PLAY AND WATCH GAMES NOT 1 VIEWER ASKED FOR (REAL)",
          viewer_count: 63748,
          started_at: "2022-02-12T02:27:01Z",
          language: "en",
          thumbnail_url:
            "https://static-cdn.jtvnw.net/previews-ttv/live_user_xqcow-{width}x{height}.jpg",
          tag_ids: [
            "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
            "6606e54c-f92d-40f6-8257-74977889ccdd",
            "2193eee1-b8f0-43bd-a6d9-dba8a67528a1",
          ],
          is_mature: false,
        },
      ])
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
