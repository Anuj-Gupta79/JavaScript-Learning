import "./App.css";
import { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "500px",
          width: "500px",
          color: "white",
          marginTop: "50px",
          marginLeft: "50px",
          padding: "10px",
        }}
      >
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          placeholder="type here....."
          value={message}
          style={{ outline: "none", background: "transparent", border: "none" }}
        />
      </div>

      <div
        style={{
          backgroundColor: "black",
          height: "600px",
          width: "600px",
          color: "white",
          marginTop: "50px",
          marginLeft: "200px",
          padding: "10px",
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default App;
