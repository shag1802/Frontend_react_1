// Frame5595.js

import React from 'react';
import background from "./download.jpeg"
const Frame5595 = () => {
  return (
    <div style={frameStyles}>
      {/* Content of Frame 5595 goes here */}
    </div>
  );
};

const frameStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  position: 'relative',
  width: '1920px',
  height: '1080px',
  backgroundImage: `url(${background})`,
};

export default Frame5595;
