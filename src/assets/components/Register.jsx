import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Register() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState({
        error : false,
        message : "",
    })

    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setError({
                error : false,
                message : "",
        });
    } else {
        setError({
            error : true,
            message : "Email is not valid",
    });
}
};



    return (

        <Box>
       <Typography>Página de Registro</Typography> 


        <Box
        component="form"
        onSubmit={handleSubmit}
        >
            <TextField 
            id="email"
            label="Email"
            type="email"
            required
            error = {error.error}
            variant="outlined"
            fullWidth
            helperText= {error.message}
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
            sx = {{
                mb:3,
                mt:3
            }}
            />
            <TextField 
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            helperText="Ingrese contraseña valida"
            error={false}
            value={pass}
            onChange = {(e) => setPass(e.target.value)}
            />
            <Button type="submit" variant="contained">Registrarme</Button>

        </Box>


        </Box>
    )
}