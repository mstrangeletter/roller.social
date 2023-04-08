import { useState, useContext } from 'react';
import { FormControl, InputLabel, Select, TextField, Grid, Box } from '@mui/material';
import './css/filter.css'
import { RoutesContext} from "../api/Routes";


   

export default function Filter(props) {

  const {routes} = useContext(RoutesContext);
  console.log(routes);
  const { selectedCountry, selectedCity, onCountryChange, onCityChange } = props;
  const [dificultad, setDificultad] = useState('');
  const [kms, setKms] = useState('');

  const handleDificultadChange = (e) => {
    setDificultad(e.target.value);
  };

  const handleKmsChange = (e) => {
    setKms(e.target.value);
  };

  const handleCountryChange = (e) => {
    onCountryChange(e.target.value);
  };

  const handleCityChange = (e) => {
    onCityChange(e.target.value);
  };

  return (
    <Box>

    <Grid sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems:'center',
      width: '100%',
      margin: 'auto',
      maxWidth: '100%',
      padding: '2rem',
      border: '1px solid #ececec',
      borderRadius: '10px',
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
      backgroundColor: '#fff',
      overflow: 'auto'

    }} container spacing={4}>
      <Grid item xs={12} md={6} lg={2}>
        <FormControl size="medium" fullWidth>
          <InputLabel id="pais-label"></InputLabel>
          <TextField
            id="pais-select"
            value={selectedCountry}
            placeholder="Ingrese país"
            onChange={handleCountryChange}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6} lg={2}>
        <FormControl size="medium" fullWidth>
          <InputLabel id="region-label">Región</InputLabel>
          <Select
            id="region-select"
            value={selectedCity}
            label="Región"
            onChange={handleCityChange}
          >
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6} lg={2}>
        <FormControl size="medium" fullWidth>
          <InputLabel id="ciudad-label">Ciudad</InputLabel>
          <Select
            id="ciudad-select"
            value={selectedCity}
            label="Ciudad"
            onChange={handleCityChange}
          >
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6} lg={2}>
        <FormControl size="medium" fullWidth>
          <InputLabel id="dificultad-label">Dificultad</InputLabel>
          <Select
            labelId="dificultad-label"
            id="dificultad-select"
            value={dificultad}
            label="Dificultad"
            onChange={handleDificultadChange}
          >
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6} lg={2}>
        <FormControl size="medium" fullWidth>
          <InputLabel id="nombre-rutas">Ruta</InputLabel>
          <Select
            id="kms-select"
            value={routes.name}
            label="nombre-rutas"
            onChange={handleKmsChange}
          >
          </Select>
        </FormControl>
      </Grid>
    </Grid>
    </Box> 
  );
}
