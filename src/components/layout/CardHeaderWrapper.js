import { Box, CardContent, CardHeader, Grid, TextField } from "@mui/material";
import React from "react";

const CardHeaderWrapper = ({ title, children }) => {
  return (
    <CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%", // Ensure full width
        }}
      >
        <Box
          sx={{
            width: "50%",
            border: "1px solid lightgrey",
            borderRadius: "5px",
          }}
        >
          <CardHeader
            title={title}
            sx={{
              color: "white",
              backgroundColor: "primary.main",
              mb: 2,
              borderRadius: "5px 10px 0 0",
            }}
          />
          {children}
        </Box>
      </Box>
    </CardContent>
  );
};
export default CardHeaderWrapper;
