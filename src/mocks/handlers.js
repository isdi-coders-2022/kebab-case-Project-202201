import { rest } from "msw";

export const handlers = [
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
  rest.get(`${process.env.REACT_APP_CLIPLIST}`, (req, res, ctx) => {
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
