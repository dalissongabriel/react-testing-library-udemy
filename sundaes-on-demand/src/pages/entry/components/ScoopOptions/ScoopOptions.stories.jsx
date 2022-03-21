import React from "react";
import ScoopOptions from "./ScoopOptions";

export default {
  title: "pages/Entry/Components/ScoopOptions",
  component: ScoopOptions,
};

export const DefaultState = () => (
  <ScoopOptions
    name="Example flavor"
    imagePath="https://dummyimage.com/140x180/eb96b2/fff.jpg&text=Example"
  />
);
