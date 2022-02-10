import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_FAVORITES}`, (req, res, ctx) => {
    res(ctx.status(200), ctx.json([{}, {}]));
  }),
];
