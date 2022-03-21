import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Vanilla",
          imagePath:
            "https://dummyimage.com/140x180/eb96b2/fff.png&text=Vanilla",
        },
        {
          name: "Chocolate",
          imagePath:
            "https://dummyimage.com/140x180/eb96b2/fff.png&text=Chocolate",
        },
        {
          name: "Strawberry",
          imagePath:
            "https://dummyimage.com/140x180/eb96b2/fff.png&text=Strawberry",
        },
        {
          name: "Cookies",
          imagePath:
            "https://dummyimage.com/140x180/eb96b2/fff.jpg&text=Cookies",
        },
      ])
    );
  }),
];
