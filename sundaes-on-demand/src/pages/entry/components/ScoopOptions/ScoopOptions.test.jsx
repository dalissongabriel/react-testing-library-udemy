import ScoopOptions from "./ScoopOptions";
const { render, screen } = require("@testing-library/react");

describe("Entry > ScoopOptions", () => {
  test("display correctly scoop item", () => {
    render(
      <ScoopOptions
        name="Example flavor"
        imagePath="https://dummyimage.com/140x180/eb96b2/fff.jpg&text=Example"
      />
    );
    // test display name
    const nameElement = screen.queryByText(/Example flavor/i);
    expect(nameElement).toBeInTheDocument();

    // test display img
    const imgElement = screen.getByRole("img", {
      name: "Example flavor scoop",
    });
    expect(imgElement).toBeInTheDocument();
  });
});
