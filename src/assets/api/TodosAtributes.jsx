import React, { createContext, useEffect, useState } from 'react';
import Axios from "axios";

export const DataContext = createContext();

export function AtributesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState([]);
  const [regions, setRegion] = useState([]);
  const [province, setProvince] = useState([]);

  useEffect(() => {
    Axios.post("https://api.rollers.social/v1/", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer [c2afecb68f1e4e30e4dd1a98d6f5e6af2c63a72f758de580697beeaee431e7df0bf722ffd57770f71a986dbae359729c792b024099ad45dd14a7be5125b74ecaa11243b88ad48fb20ed9556f9cc5e1d28a8e7829e36ae54215074101d644dd9f893b26d7874ece5487085293e577b752b924a4b4ab1743a7601c31814ea157ec]",
      },
      data: {
        query: `
          query {
            countries {
              data {
                id
                attributes {
                  name
                  regions {
                    data {
                      id
                      attributes {
                        name
                        cities {
                          data {
                            id
                            attributes {
                              name
                              routes {
                                data {
                                  id
                                  attributes {
                                    name
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
      }
    })
    .then(response => {
      const countries = response.data.data.countries.data;

      const regions = countries.map(country =>
        country.attributes.regions.data.map(region => region.attributes.name)
      );

      const cities = countries.map(country =>
        country.attributes.regions.data.map(region =>
          region.attributes.cities.data.map(city => city.attributes.name)
        )
      );

      const routes = countries.map(country =>
        country.attributes.regions.data.map(region =>
          region.attributes.cities.data.map(city =>
            city.attributes.routes.data.map(route => route.attributes.name)
          )
        )
      );

      setName(countries.map(country => country.attributes.name));
      setCountries(regions);
      setRegion(cities);
      setProvince(routes);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <DataContext.Provider value={{ countries, name, regions, province }}>
      {children}
    </DataContext.Provider>
  );
}

function CountryOptions({ countries }) {
  return (
    <select>
      {countries.map(country => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
}

function SelectCountries() {
  const { countries } = useContext(DataContext);

  return (
    <div>
      <CountryOptions countries={countries} />
    </div>
  );
}

export default SelectCountries;
