import React from 'react';
import './Teacher.css';

import Leasons from '../Leasons/Leasons';
import GraphicCalifications from '../../components/GraphicCalifications/GraphicCalifications';

const Teacher = () => {
  return (
    <div>
      <h2>Teacher Page</h2>
      <div>
        <Leasons />
        <div className='graficas'>
          <GraphicCalifications title='Grupo' />
          <GraphicCalifications title='Materias' />
        </div>
        <h4>0% - 100%</h4>
      </div>
    </div>
  );
};

export default Teacher;
