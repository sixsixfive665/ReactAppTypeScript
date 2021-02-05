import React from 'react';
import renderRoutes from 'utils/renderRoutes'

const Other:React.FC = (props:any) => {
  return (
    <div>
      {renderRoutes(props.routes)}
    </div>

  );
};

export default Other;