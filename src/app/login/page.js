"use client";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
// Import useAuth hook from your authentication context

const LoginPage = () => {
  // const { login } = useAuth(); // Access the login function from the useAuth hook
  const router = useRouter();
  const handleLogin = async (event) => {
    const user = {
      id: 2,
      email: "admin@example.com",
      password: "admin123",
      name: "Admin User",
      role: "admin",
    };
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const success = await login(email, password);
    if (email && password) {
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/home");
    } else {
      // Display error message
    }
  };

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
              src="/login-image.jpg"
              alt="Login Image"
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
              Login
            </Typography>
            <form onSubmit={handleLogin}>
              {/* Added onSubmit handler for form submission */}
              <TextField
                style={{ marginBottom: "16px" }}
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
              />
              <TextField
                style={{ marginBottom: "16px" }}
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
