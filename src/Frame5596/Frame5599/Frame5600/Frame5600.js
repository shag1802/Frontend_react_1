import React from 'react';

import Frame5602 from './Frame5602/Frame5602';
import Frame5601 from './Frame5601/Frame5601';
const Frame5600 = () => {
  return (
    <div style={frame5600Styles}>
      {/* Content of Frame 5600 goes here */}
      <Frame5602 />
      <Frame5601 />
    </div>
  );
};

const frame5600Styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  gap: '10px',
  width: '360px',
  height: '80px',
  background: '#EFF3FD',
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '20px 20px 0px 0px',
  flex: 'none',
  order: '0',
  alignSelf: 'stretch',
  flexGrow: '0',
};

export default Frame5600;
