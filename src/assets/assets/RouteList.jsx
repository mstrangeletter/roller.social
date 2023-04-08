import React, { useContext } from 'react';
import Card from '../components/Card';
import { RoutesContext } from '../api/Routes';

function RouteList() {
  const routes = useContext(RoutesContext);
  
  return (
    <div className="route-list">
      {routes.map(route => (
        <Card
          key={route.id}
          title={route.name}
          description={route.description}
          coordinates={route.coordinates}
        />
      ))}
    </div>
  );
}

export default RouteList;
