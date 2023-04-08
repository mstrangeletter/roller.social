import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Contact() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState({
        error: false,
        message: "",
    })

    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setError({
                error: true,
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

        <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"center",

        }}>
            <Typography variant="h4"
            sx={{
                justifyContent: "center",
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                marginRight:"1rem",
                marginTop:"2rem"
                

            }}>Página de Contacto</Typography>


            <Box
                component="form"
                onSubmit={handleSubmit}
            >
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
                        m: 3,
                    }}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Ingresa tus comentarios"
                    multiline
                    maxRows={4}
                    fullWidth
                    sx={{
                        m:3,
                        
                    }}
                />
                <Button variant="contained"
                sx={{
                    color: "textSecondary",
                    marginTop: "1rem"

                    
                }}>Enviar</Button>
            </Box>


        </Box>
    )
}