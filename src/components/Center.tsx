import { Grid } from "@mui/material";
import React from "react";

export default function Center(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
      }}
    >
      <Grid item xs={1}>
        {props.children}
      </Grid>
    </Grid>
  );
}
