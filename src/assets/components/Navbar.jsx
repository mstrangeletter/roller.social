import { ThemeProvider, createTheme ,AppBar, Button, Drawer, IconButton , Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';




export default function Navbar() {
    const theme = createTheme({
        palette: {
            primary: {
                light: '#757ce8',
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#364cc3',
                dark: '#ba000d',
                contrastText: '#000',
            },
        }
    });

    const [open, setOpen] = useState(false);


    return (
        <>
            <ThemeProvider theme={theme}>

                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <IconButton
                            onClick={() => setOpen(true)}
                            color="inherit"
                            size="large"
                        >
                            <MenuIcon sx={{
                                color: '#fff',
                            }}/>
                        </IconButton>
                        <RollerSkatingIcon color="inherit" porition="" sx={{
            pr: 2,
            pl: 2
          }} />    
                        <Typography c variant="h5" sx={{
                            color: '#fff',
                            flexGrow: 1
                        }}> Roller Social</Typography>

                        <Link to="/">
                            <Button
                                component="a"
                                color="inherit">Home</Button>
                        </Link>

                        <Link to="/Contact">
                            <Button
                                component="a"
                                color="inherit">Contacto</Button>
                        </Link>

                        <Link to="/Rutas">
                            <Button
                                component="a"
                                color="inherit">Rutas</Button>
                        </Link>

                        <Link to="/Register">
                            <Button
                                component="a"
                                color="inherit">Register</Button>
                        </Link>

                        <Link to="/Login">
                            <Button
                                component="a"
                                color="inherit">Login</Button>
                        </Link>


                    </Toolbar>
                </AppBar>
            </ThemeProvider>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >

                <NavListDrawer />
            </Drawer>


        </>

    )
}