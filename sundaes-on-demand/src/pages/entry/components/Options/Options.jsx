import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ScoopOptions } from "../";
import { StyledGridContainer, StyledTitle } from "./Options.styles";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3030/${optionType}`)
      .then((r) => r.json())
      .then((items) => setItems(items))
      .catch((error) => {
        console.error(error);
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <Box>
      <StyledTitle>Choose your ice cream flavor:</StyledTitle>
      <StyledGridContainer container>{optionItems}</StyledGridContainer>
    </Box>
  );
};

Options.defaultProps = {
  optionType: "scoops",
};

export default Options;
