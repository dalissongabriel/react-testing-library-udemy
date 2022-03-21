import { Grid, Typography } from "@mui/material";
import { StyledScoopWrapper } from "./ScoopOptions.styles";

const ScoopOptions = ({ name, imagePath }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <StyledScoopWrapper>
        <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
        <img
          width="140px"
          height="180px"
          src={imagePath}
          alt={`${name} scoop`}
        />
      </StyledScoopWrapper>
    </Grid>
  );
};

ScoopOptions.defaultProps = {
  name: "example ice cream flavor",
  imagePath: "https://encurtador.com.br/ipPQ8",
};

export default ScoopOptions;
