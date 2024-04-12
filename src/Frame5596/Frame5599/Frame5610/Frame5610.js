import React from 'react';
import './styles.css'; // Assuming the CSS file is named styles.css

const MessageInput = () => {
  return (
    <div className="frame_5610">
      <div style={{display:'flex', flexDirection:'column'}}>
        <div className="frame_5618">
          {/* <input type="text" className="type_your_message" placeholder="Type your message" />
          */}
          <input type="text" className="type_your_message" placeholder="Type your message" />
          <div className="paperclip"></div>
          <div className="vector"></div>
        </div>
        {/* <div className="frame_5617">
          <div className="vector"></div>
        </div> */}
      </div>
      
      
      <div className="frame_5620">
        <span className="powered_by">Powered by</span>
        <span className="krunk_ai">Krunk.ai</span>
        <div className="logo"></div>
      </div>
    </div>
  );
};

export default MessageInput;
