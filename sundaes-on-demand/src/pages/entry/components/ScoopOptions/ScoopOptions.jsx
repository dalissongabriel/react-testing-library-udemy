import { Box, Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const ScoopOptions = ({ name, imagePath }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box
        sx={({ breakpoints, spacing }) => ({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          cursor: "pointer",
          color: red[300],
          mb: spacing(2),
          [breakpoints.up("md")]: {
            alignItems: "center",
          },
          "&:hover": {
            color: red[500],
          },
        })}
      >
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <img
          width="100px"
          height="100px"
          src={imagePath}
          alt={`${name} scoop`}
        />
      </Box>
    </Grid>
  );
};

ScoopOptions.defaultProps = {
  name: "example ice cream flavor",
  imagePath: "https://encurtador.com.br/ipPQ8",
};

export default ScoopOptions;
