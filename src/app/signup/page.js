"use client"
import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <Container
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container justifyContent="center" spacing={3}>
        {/* Left Image */}
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <Image
              src="/signup-image.jpg"
              alt="Sign Up Image"
              width={400}
              height={400}
              style={{ maxWidth: "100%", height: "auto", borderRadius: "16px" }}
            />
          </div>
        </Grid>

        {/* Right Form */}
        <Grid item xs={12} md={6}>
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "24px",
              borderRadius: "16px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Sign Up
            </Typography>
            <form>
              <TextField
                style={{ marginBottom: "16px" }}
                label="Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                style={{ marginBottom: "16px" }}
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
              />
              <TextField
                style={{ marginBottom: "16px" }}
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
              />
              <Button variant="contained" color="primary" fullWidth>
                Sign Up
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
