import React, { createContext, useEffect, useState } from 'react';
import Axios from "axios";
//se exporta la constante de contexto
export const RoutesContext = createContext();

//tambien se exporta la funcion del componente provider
//en este caso es RoutesProvider
export function RoutesProvider({ children }) {
  const [routes, setRoutes] = useState([]);
//aqui accedemos a la API a traves de las queries de graphQL dentro de un useEffect para controlar la renderización. 
// dejamos vacia las dependencia para no repetir la renderización 
  useEffect(() => {

    //usamos axios.post porque le da una capa extra de seguridad
    //siempre es axios.post  o fetch.post 
    Axios.post("https://api.rollers.social/v1/", {
      data: {
      query: `query {
        routes {
          data {
            id
            attributes {
              name
              description
              uid
              route_paths {
                data {
                  id
                  attributes {
                    name
                    color
                    meta {
                      id
                      level
                      required_effort
                      distance
                    }
                  }
                }
              }
            }
          }
        }
      }`
    }
    }, {

      // Acá le pasamos el objeto literal 
      headers: {
        "Content-Type": "application/json",
        //acá usamos el Token de validación que me diste 
        "Authorization": "Bearer [c2afecb68f1e4e30e4dd1a98d6f5e6af2c63a72f758de580697beeaee431e7df0bf722ffd57770f71a986dbae359729c792b024099ad45dd14a7be5125b74ecaa11243b88ad48fb20ed9556f9cc5e1d28a8e7829e36ae54215074101d644dd9f893b26d7874ece5487085293e577b752b924a4b4ab1743a7601c31814ea157ec]"
      }
    })
    .then(response => {
      console.log(response.data.data.routes.data);
      setRoutes(response.data.data.routes.data);
    })
    .catch(error => console.log(error));
  }, []);

  return  (
    <RoutesContext.Provider value={{ routes }}>
      { children }
    </RoutesContext.Provider>
  )
}
