import { Box, styled } from "@mui/material";
import { red } from "@mui/material/colors";

export const StyledScoopWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  cursor: "pointer",
  color: red[300],
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
  },
  "&:hover": {
    color: red[500],
  },
}));
