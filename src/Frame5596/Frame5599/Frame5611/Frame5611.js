import React from 'react';
import Frame5612 from './Frame5612/Frame5612';
import Frame5613 from './Frame5613/Frame5613';
import Frame5903 from './Frame5903/Frame5903';
import Frame5906 from './Frame5906/Frame5906';
const Frame5611 = () => {
  return (
    <div style={styles.frame5611}>
      {/* Content */}
      <Frame5612 />
      <Frame5613 />
      <Frame5903 />
      <Frame5906 />
    </div>
  );
};

const styles = {
  frame5611: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '5px 5px',
    gap: '10px',
    width: '389px',
    height: '460px',
    background: 'radial-gradient(152.95% 83.67% at 54.44% 42.5%, #FFFFFF 50.47%, rgba(227, 225, 225, 0) 100%)',
    flex: 'none',
    order: '1',
    alignSelf: 'stretch',
    // flexGrow: '1',
  },
};

export default Frame5611;
