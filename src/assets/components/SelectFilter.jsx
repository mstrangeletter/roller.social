import "./css/filter.css";
import { useContext } from 'react';
import { RoutesContext } from "../api/Routes";

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SelectFilter(props) {
  const { routes } = useContext(RoutesContext);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [dificultad, setDificultad] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleDificultadChange = (event) => {
    setDificultad(event.target.value);
  };

  const handleRouteChange = (event) => {
    // handle route change
  };


  return (
    <Grid  className="filter-box" container spacing={4}>
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
              onChange={handleRouteChange}
            >
              {routes.map((route) => (
                <MenuItem key={route.id} value={route.name}>
                  {route.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
  );
}




/* import "./css/filter.css";
import RoutesProvider from "../api/Routes";



import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SelectFilter = (props) => {

  return (
    

*/