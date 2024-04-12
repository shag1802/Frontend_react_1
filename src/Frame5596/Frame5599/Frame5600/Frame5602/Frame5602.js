import React from 'react';
import background from "./SIMPLE_CHATBOTS.png";
import bg1 from "./Vector.png";

const MyComponent = () => {
  return (
    <div style={styles.container}>
      <div style={styles.chatbotContainer}>
        <div style={styles.chatbotIcon}></div>
        <div style={styles.ellipse}></div>
      </div>
      <div style={styles.textContainer}>
        <div style={styles.shauray}>
          <div style={styles.timpu}>Timpu</div>
          <div style={styles.vector}></div>
        </div>
        <div style={styles.chatAssistant}>Chat assistant</div>
      </div>
    </div>
  );
};

const styles = {
  shauray:{
    display: 'flex',
    flexDirection: 'row',
    // marginRight: '100px',
    marginRight: '31px',
    gap : '9px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: '11px 0px',
    gap: '5px',
    // margin: '0 auto',
    width: '200px',
    height: '53px',
    order: '1',
    flex: 'none',
    alignSelf: 'stretch',
    flexGrow: '0',
  },
  chatbotContainer: {
    position: 'relative',
    width: '50px',
    height: '50px',
  },
  chatbotIcon: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '50px',
    height: '50px',
    background: `url(${background}), #FFFFFF`,
    border: '1px solid #FFFFFF',
    borderRadius: '30px',
  },
  ellipse: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    left: '38.5px',
    top: '40px',
    background: '#3FE225',
    borderRadius: '10px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  timpu: {
    width: '59px',
    height: '27px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '27px',
    color: '#4C82EF',
  },
  vector: {
    width: '16.41px',
    height: '16.5px',
    background: `url(${bg1})`,
    marginTop: '5px',
  },
  chatAssistant: {
    // width: '100px',
    height: '10px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '10px',
    color: '#4C82EF',
  },
};

export default MyComponent;
