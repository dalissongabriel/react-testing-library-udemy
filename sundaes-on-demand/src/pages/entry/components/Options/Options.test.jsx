import Options from "./Options";
const { render, screen } = require("@testing-library/react");

describe("Entry > Options", () => {
  test("display image for each option scoop", async () => {
    render(<Options optionType="scoops" />);

    // find images (asynchronous)
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

    expect(scoopImages).toHaveLength(4);

    // confirm alt text of images
    const altTexts = scoopImages.map((scoopImg) => scoopImg.alt);
    expect(altTexts).toEqual([
      "Vanilla scoop",
      "Chocolate scoop",
      "Strawberry scoop",
      "Cookies scoop",
    ]);
  });
});
