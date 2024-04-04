import React, { useState } from 'react';
import './App.css';


function Mendoza({ hw }) {
  return (
      <div>
        <p>{hw}</p>
      </div>
  );
}


export default function App() {
  const [resume, setResume] = useState({
    hw: "hello world",}
  );

  return (
    <div className="App">
      <Mendoza hw={resume.hw} />
    </div>
  );
}
