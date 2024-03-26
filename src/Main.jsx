import React from "react";
import './App.css'; // Assuming you have your CSS styles in this file
//import gifBg from './intro.gif'; // Import your GIF file


const RectangleWithText = ({ width, height, backgroundColor, borderColor, text }) => {
  // Style object to define the styles for the rectangle and text
  const styles = {
    rectangle: {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      border: `2px solid ${borderColor}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: '18px', // You can adjust the font size here
      color: '#000', // You can adjust the color of the text here
    },
  };

return (
    <div style={styles.rectangle}>
      <div style={styles.text}>{text}</div>
    </div>
  );
};

export default RectangleWithText;
