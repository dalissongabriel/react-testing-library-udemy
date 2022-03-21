import { Grid, styled, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: red[500],
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: grey[200],
  padding: theme.spacing(2),
  borderRadius: "0.5rem",
}));
