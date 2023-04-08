import React, { useEffect, useContext } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Filter from './Filter';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import backgroundImage from "./css/imgs/imgHero.jpg";
import { RoutesContext } from '../api/Routes';
import RouteList from '../assets/RouteList';
import SelectFilter from './Filter';



mapboxgl.accessToken = 'pk.eyJ1IjoibWlndWVjYXJ0YWdlbmEiLCJhIjoiY2xmdmxseGdqMDhhZzNnbmx3amNqMDZ3NCJ9.JGt4nHFNzErM4uLoOOgAVg';



export default function MapRollerSocial() {



    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-70.5448324, -33.407952],
            zoom: 13
        });

        // Agregar controles de navegación y ubicación al mapa

        map.addControl(new MapboxGeocoder({
            accessToken: mapboxgl.accessToken
        }));
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.FullscreenControl());
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));
    }, []);

    return <>

        <SelectFilter/>

        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }}>
        </div>



        <Box sx={{
            pt: 10,
            m: 5,
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "20px",
            borderRadius: "10px"

        }}>
            <Typography>
                <strong> Rutas</strong>


            </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: "70%",
                maxWidth: "600px",
                margin: "auto",
                textAlign: "center",
                bgcolor: "rgba(255, 255, 255, 0.8)",
                marginBottom: "3rem"

            }}>

                <Typography variant='h4' sx={{
                    pb: 3,
                }}>

                    ENCUENTRA TU PRÓXIMA AVENTURA ROLLER

                </Typography>

                <Typography variant="p">

                    Ya sea que prefieras una ruta rápida y emocionante o una ruta rural con paisajes impresionantes, ¡ Roller Social es el lugar para encontrarla! Comparte tus rutas favoritas y actividades con amigos de la comunidad roller, de una manera fácil y atractiva. ¡Únete a la diversión y comparte tus aventuras roller hoy mismo!
                </Typography>

            </Box>

            <Filter />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid className='rutas' item xs={5}
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        margin: "auto",
                    }}>
                    <RouteList />
                </Grid>
                <Grid className="card-list" item xs={12} md={12} lg={7} sx={{
                    pb: 5,
                    width: "100%",
                    height: "100vh",

                }}>
                    <Box className="card-list">

                    </Box>
                    <Box sx={{
                        width: "70%",
                        display: "flex",
                        alignItems: "center",
                        margin: "auto",
                    }}>


                        <Box id="map" className="" sx={{

                            display: "flex",
                            pt: 5,
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            height: "500px",
                            flexGrow: 1,


                        }} />
                    </Box>
                </Grid>

            </Grid>
        </Box>
    </>

}
