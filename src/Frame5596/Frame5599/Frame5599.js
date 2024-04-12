// Frame5599.js

import React from 'react';
import Frame5600 from './Frame5600/Frame5600';// Assuming you'll create Frame5600 component
import Frame5610 from './Frame5610/Frame5610';
import Frame5611 from './Frame5611/Frame5611';

const Frame5599 = () => {
    return (
      <div style={frame5599Styles}>
        {/* Content of Frame 5599 goes here */}
        <Frame5600 />
        <Frame5611 />
        <Frame5610 />
        {/* <Frame5610 /> */}
      </div>
    );
  };
  
  const frame5599Styles = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    width: '400px',
    height: '800px',
    left: 'calc(50% - 360px/2)',
    top: 'calc(50% - 800px/2)',
    background: '#FFFFFF',
    border: '7px solid #FFFFFF',
    borderRadius: '20px',
  };
  
//   export default Frame5599;
  
  export default Frame5599;