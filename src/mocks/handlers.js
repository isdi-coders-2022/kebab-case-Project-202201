import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_CLIPLIST}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: "ProtectiveFamousCaterpillarNotATK",
            url: "https://clips.twitch.tv/ProtectiveFamousCaterpillarNotATK",
            embed_url:
              "https://clips.twitch.tv/embed?clip=ProtectiveFamousCaterpillarNotATK",
            broadcaster_id: "124420521",
            broadcaster_name: "LCS",
            creator_id: "57407565",
            creator_name: "mugiboya",
            video_id: "670900165",
            game_id: "21779",
            language: "en",
            title: "Phreak loses his mind ",
            view_count: 288487,
            created_at: "2020-07-05T23:12:48Z",
            thumbnail_url:
              "https://clips-media-assets2.twitch.tv/AT-cm%7C775031094-preview-480x272.jpg",
            duration: 49.1,
          },
          {
            id: "EvilAbnegateNoodlePartyTime",
            url: "https://clips.twitch.tv/EvilAbnegateNoodlePartyTime",
            embed_url:
              "https://clips.twitch.tv/embed?clip=EvilAbnegateNoodlePartyTime",
            broadcaster_id: "124420521",
            broadcaster_name: "LCS",
            creator_id: "75174156",
            creator_name: "DammitRuss",
            video_id: "86237849",
            game_id: "21779",
            language: "en",
            title: "NA LCS Finals: TSM vs. Cloud9",
            view_count: 251365,
            created_at: "2016-08-29T00:04:52Z",
            thumbnail_url:
              "https://clips-media-assets2.twitch.tv/23027294384-offset-17170-preview-480x272.jpg",
            duration: 30.2,
          },
          {
            id: "EncouragingPeacefulHawkBigBrother-hdA9jgC8HFZlDThK",
            url: "https://clips.twitch.tv/EncouragingPeacefulHawkBigBrother-hdA9jgC8HFZlDThK",
            embed_url:
              "https://clips.twitch.tv/embed?clip=EncouragingPeacefulHawkBigBrother-hdA9jgC8HFZlDThK",
            broadcaster_id: "490592527",
            broadcaster_name: "VALORANT",
            creator_id: "251371241",
            creator_name: "itschazdelly",
            video_id: "",
            game_id: "516575",
            language: "en",
            title:
              "Valorant Announcers Sh!t On Team Liquid Soulcas For Throwing Easy Kill",
            view_count: 73470,
            created_at: "2021-05-25T21:11:59Z",
            thumbnail_url:
              "https://clips-media-assets2.twitch.tv/AT-cm%7C1193543059-preview-480x272.jpg",
            duration: 11.9,
          },
          {
            id: "LaconicUgliestSquirrelTheTarFu-0fsb_bQ6NZCEe1Qp",
            url: "https://clips.twitch.tv/LaconicUgliestSquirrelTheTarFu-0fsb_bQ6NZCEe1Qp",
            embed_url:
              "https://clips.twitch.tv/embed?clip=LaconicUgliestSquirrelTheTarFu-0fsb_bQ6NZCEe1Qp",
            broadcaster_id: "490592527",
            broadcaster_name: "VALORANT",
            creator_id: "134922004",
            creator_name: "3taplive",
            video_id: "",
            game_id: "516575",
            language: "en",
            title: "The most hectic round in VALORANT Esports History",
            view_count: 70777,
            created_at: "2021-04-29T10:58:51Z",
            thumbnail_url:
              "https://clips-media-assets2.twitch.tv/AT-cm%7C1156637798-preview-480x272.jpg",
            duration: 30.5,
          },
          {
            id: "AntediluvianDullBeanSoonerLater-BNJH4mWUq4t-s2Vq",
            url: "https://clips.twitch.tv/AntediluvianDullBeanSoonerLater-BNJH4mWUq4t-s2Vq",
            embed_url:
              "https://clips.twitch.tv/embed?clip=AntediluvianDullBeanSoonerLater-BNJH4mWUq4t-s2Vq",
            broadcaster_id: "83232866",
            broadcaster_name: "ibai",
            creator_id: "194206896",
            creator_name: "EVOQU_",
            video_id: "",
            game_id: "518203",
            language: "es",
            title: "Ibai Meets Messi on Livestream For The First Time",
            view_count: 176556,
            created_at: "2021-08-11T11:06:17Z",
            thumbnail_url:
              "https://clips-media-assets2.twitch.tv/42916171116-offset-1524-preview-480x272.jpg",
            duration: 30,
          },
          {
            id: "GloriousJoyousEaglePermaSmug-pM_L4n97LRh6a-fu",
            url: "https://clips.twitch.tv/GloriousJoyousEaglePermaSmug-pM_L4n97LRh6a-fu",
            embed_url:
              "https://clips.twitch.tv/embed?clip=GloriousJoyousEaglePermaSmug-pM_L4n97LRh6a-fu",
            broadcaster_id: "83232866",
            broadcaster_name: "ibai",
            creator_id: "204065133",
            creator_name: "AlexLeandoer",
            video_id: "",
            game_id: "509663",
            language: "es",
            title: "Balloon World Cup",
            view_count: 126119,
            created_at: "2021-10-14T18:07:13Z",
            thumbnail_url:
              "https://clips-media-assets2.twitch.tv/AT-cm%7CXvWHOqTPy-J_ey0Yemvn7g-preview-480x272.jpg",
            duration: 24.8,
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
    if (idParam === "71092938") {
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
    } else if (idParam === "156037856") {
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
            display_name: "favStreamer1",
            profile_image_url:
              "https://static-cdn.jtvnw.net/jtv_user_pictures/de952b08-201d-4b93-9602-c8deb9d2610f-profile_image-300x300.png",
          },
          {
            id: "490592527",
            display_name: "favStreamer2",
            profile_image_url:
              "https://static-cdn.jtvnw.net/jtv_user_pictures/811dc7d4-1079-4ead-8b48-97f3ff4fa361-profile_image-300x300.png",
          },
          {
            id: "83232866",
            display_name: "favStreamer3",
            profile_image_url:
              "https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-300x300.png",
          },
        ])
      );
    }
  ),

  rest.delete(
    "https://shawarma-streaming.herokuapp.com/streamers/124420521",
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
];
