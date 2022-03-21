import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Vanilla",
          imagePath:
            "https://foodsguy.com/wp-content/uploads/2019/09/Vanilla-Extract-for-Ice-Cream.jpg",
        },
        {
          name: "Chocolate",
          imagePath:
            "https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/19/2019/07/11/429048911_6059361581001_6059351092001-vs.jpg&w=1280&h=720&q=90&c=cc",
        },
        {
          name: "Strawberry",
          imagePath:
            "https://lovingitvegan.com/wp-content/uploads/2019/02/Vegan-Strawberry-Ice-Cream-19.jpg",
        },
        {
          name: "Cookies",
          imagePath:
            "https://www.chewoutloud.com/wp-content/uploads/2013/08/cookies-and-cream-in-white-bowl.jpg",
        },
      ])
    );
  }),
];
