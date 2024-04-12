import React from 'react';

const Frame5601 = () => {
  return (
    <div style={frameStyles}>
      <div style={ellipseStyles}></div>
      <div style={onlineStyles}>Online</div>
    </div>
  );
}

const frameStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
  padding: '15px 0px',
  gap: '5px',
  margin: '0',
  width: '62px',
  height: '51px',
  flex: 'none',
  order: '1',
  alignSelf: 'stretch',
  flexGrow: '0',
};

const ellipseStyles = {
  width: '8px',
  height: '8px',
  background: '#3FE225',
  borderRadius: '10px',
  flex: 'none',
  order: '0',
  flexGrow: '0',
};

const onlineStyles = {
  width: '49px',
  height: '10px',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '15px',
  lineHeight: '10px',
  display: 'flex',
  alignItems: 'flex-end',
  color: '#4C82EF',
  flex: 'none',
  order: '1',
  flexGrow: '0',
};

export default Frame5601;
