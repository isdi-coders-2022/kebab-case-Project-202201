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

  rest.get("https://api.twitch.tv/helix/streams", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
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
        ],
      })
    );
  }),

  rest.get("https://api.twitch.tv/helix/users", (req, res, ctx) => {
    const idParam = req.url.searchParams.get("id");
    if (idParam === 71092938) {
      return res(
        ctx.status(200),
        ctx.json({
          data: [
            {
              id: "71092938",
              login: "xqcow",
              display_name: "xQcOW",
              type: "",
              broadcaster_type: "partner",
              description:
                "THE BEST AT ABSOLUTELY EVERYTHING. THE JUICER. LEADER OF THE JUICERS.",
              profile_image_url:
                "https://static-cdn.jtvnw.net/jtv_user_pictures/xqcow-profile_image-9298dca608632101-300x300.jpeg",
              offline_image_url:
                "https://static-cdn.jtvnw.net/jtv_user_pictures/cd4e260a-7ea8-476c-af64-a151838add9a-channel_offline_image-1920x1080.png",
              view_count: 487588507,
              created_at: "2014-09-12T23:50:05Z",
            },
          ],
        })
      );
    } else if (idParam === 156037856) {
      return res(
        ctx.status(200),
        ctx.json({
          data: [
            {
              id: "156037856",
              login: "fextralife",
              display_name: "Fextralife",
              type: "",
              broadcaster_type: "partner",
              description:
                "Fextralife is a gaming community & game news source fueled by a team of dedicated gamers! We play Action, Adventure and RPGs, some Survival & FPS too!. Elden Ring, Baldur's Gate 3 hype! Check out our 200+ Wikis, reviews on Youtube & more! This week STREAMS: Elden Ring & LOST ARK",
              profile_image_url:
                "https://static-cdn.jtvnw.net/jtv_user_pictures/a28b0d37-81d0-415a-8ed8-1a1f998ea26d-profile_image-300x300.png",
              offline_image_url:
                "https://static-cdn.jtvnw.net/jtv_user_pictures/96dacfa8-b861-4849-811c-b119e422cd85-channel_offline_image-1920x1080.jpeg",
              view_count: 1881634275,
              created_at: "2017-05-07T00:21:11Z",
            },
          ],
        })
      );
    } else {
      return res(ctx.status(400), ctx.json());
    }
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

  rest.get(
    "https://shawarma-streaming.herokuapp.com/streamers",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: "124420521",
            display_name: "favStreamer",
            profile_image_url:
              "https://static-cdn.jtvnw.net/jtv_user_pictures/de952b08-201d-4b93-9602-c8deb9d2610f-profile_image-300x300.png",
          },
          {
            id: "490592527",
            display_name: "favStreamer",
            profile_image_url:
              "https://static-cdn.jtvnw.net/jtv_user_pictures/811dc7d4-1079-4ead-8b48-97f3ff4fa361-profile_image-300x300.png",
          },
          {
            id: "83232866",
            display_name: "favStreamer",
            profile_image_url:
              "https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-300x300.png",
          },
        ])
      );
    }
  ),
];
