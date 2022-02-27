import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

type Props = {
  children: ReactNode;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Layout({ children }: Props) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={8} sx={{ mt: "2rem" }}>
            {children}
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Box>
    </>
  );
}
