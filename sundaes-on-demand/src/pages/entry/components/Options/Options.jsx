import { Box, Grid, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { ScoopOptions } from "../";

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
      <Typography
        sx={{
          color: red[500],
          fontWeight: "bold",
          mb: ({ spacing }) => spacing(2),
        }}
      >
        Choose your ice cream flavor:{" "}
      </Typography>
      <Grid
        container
        sx={{
          bgcolor: grey[100],
          padding: ({ spacing }) => spacing(2),
          borderRadius: "0.5rem",
        }}
      >
        {optionItems}
      </Grid>
    </Box>
  );
};

Options.defaultProps = {
  optionType: "scoops",
};

export default Options;
