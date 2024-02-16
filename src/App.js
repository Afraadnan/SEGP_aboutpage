import React, { useState, useEffect } from "react";
import './App.css';
import RectangleWithText from './Main'; // Import the RectangleWithText component

function App() {
  const [data, setData] = useState({
    name: "Afra",
    age: 0,
    date: "trying",
    programming: "python",
  });

  // Using useEffect to fetch data from the Flask server
  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((data) => {
        setData({
          name: data.Name,
          age: data.Age,
          date: data.Date,
          programming: data.programming,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ABOUT</h1>
        {/* Rendering data fetched from the server */}
       
     
     
     
      </header>
      <RectangleWithText>
      text="Hello, world!" ;
      backgroundColor:"rgba(102,102,193)";
        borderColor:"	#FFFFFF" ;
        borderRadius:"50";
     
      </RectangleWithText>
      {/* Rendering the RectangleWithText component */}
      
    </div>
  );
}

export default App;
