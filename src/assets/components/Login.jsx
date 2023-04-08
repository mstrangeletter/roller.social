import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError({
        error: false,
        message: "",
      });
    } else {
      setError({
        error: true,
        message: "Email is not valid",
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          justifyContent: "center",
          color: "textSecondary",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          marginRight: "1rem",
          marginTop: "2rem",
        }}
      >
        Ingrese a su cuenta
      </Typography>
      <Box>
        <TextField
          id="email"
          label="Email"
          type="email"
          required
          error={error.error}
          variant="outlined"
          fullWidth
          helperText={error.message}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mb: 3,
            mt: 3,
          }}
        />
        <TextField
          id="password"
          label="Ingrese su contraseña"
          type="password"
          variant="outlined"
          fullWidth
          required
          helperText="Ingrese su contraseña"
          error={false}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
          
        <Button variant="contained">Ingresar</Button>
      </Box>
    </Box>
  );
}
