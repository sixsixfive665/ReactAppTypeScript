import React from 'react';
import { Switch } from "react-router";
import renderRoutes from 'utils/renderRoutes'

const Other:React.FC = (props:any) => {
  return (
    <div>
      <Switch>
        {renderRoutes(props.routes)}
      </Switch>
    </div>

  );
};

export default Other;