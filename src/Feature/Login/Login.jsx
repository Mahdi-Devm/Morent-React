import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const InputField = ({ label, type }) => (
  <div className="mb-4">
    <TextField
      label={label}
      type={type}
      fullWidth
      variant="outlined"
      required
      className="rounded-xl"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
        },
        "& .MuiInputLabel-root": {
          color: "#6b7280",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#e5e7eb",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#3b82f6",
        },
      }}
    />
  </div>
);

export default function LoginPage() {
  const [error, setError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);
  };

  return (
    <Container component="main" maxWidth="xs" className="py-12 px-6">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ffffff",
          padding: 4,
          borderRadius: 10,
          boxShadow: 5,
          height: "600px",
          width: "100%",
          maxWidth: "450px",
          overflow: "hidden",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: 15,
          },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          className="text-center text-stone-700 font-bold"
          sx={{
            color: "#3b82f6",
            fontWeight: "600",
          }}
        >
          Login
        </Typography>
        <Typography variant="body2" className="text-center mb-6 text-gray-600">
          Please login to your account
        </Typography>

        <form onSubmit={handleSubmit}>
          <InputField label="First Name" type="text" />
          <InputField label="Last Name" type="text" />
          <InputField label="Email Address" type="email" />
          <InputField label="Password" type="password" />

          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                name="rememberMe"
                color="primary"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 18,
                  },
                }}
              />
            }
            label="Remember me"
            sx={{
              alignSelf: "flex-start",
              marginBottom: "20px",
              fontSize: "0.875rem",
              color: "#4b5563",
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="mb-6 py-3 text-lg font-medium rounded-lg transition duration-200 transform hover:scale-105"
            sx={{
              backgroundColor: "#3b82f6",
              "&:hover": {
                backgroundColor: "#2563eb",
              },

              borderRadius: "12px",
              padding: "12px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Login
          </Button>

          {error && (
            <Typography
              variant="body2"
              className="text-center text-red-500 mb-4"
              sx={{
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              Incorrect email or password
            </Typography>
          )}
        </form>

        <div className="text-center text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            Sign Up
          </a>
        </div>
      </Box>
    </Container>
  );
}
