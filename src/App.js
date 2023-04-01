import { useState } from "react";
import logo from './logo.svg';
import './App.css';



function Button({label, onClick}) {
  return (
    <button className="CalculatorBtn" onClick={onClick}>
  {label}
    </button>
  );
}


  
function Display({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}




function App() {
  
  const[disp, setDisp] = useState("INPUT CODE");
  const[num1, setNum1] = useState(null);

  
  const numberClickHandler = (e) => {
    e.preventDefault();
    
    const value = e.target.innerHTML;

      if(num1 === null){
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1+value);
        setDisp(num1+value);
      }

        
    console.log(num1);
 
    
} 


  

  const equalClickHandler = (e) => {
    e.preventDefault();
    
    if (num1 === "1234567890" ) {
      setDisp("SUCCESS");
    }
    else if(num1 ==="2018001301") {
      setDisp("SUCCESS");
    }  
    else{
      setDisp("INVALID");
    }

    
  }
  
  const clearClickHandler = (e) => {
    e.preventDefault();
    setDisp('INPUT CODE');
    setNum1(null);


  }
  
  return (
  <div className="Calculator">
  
      <Display display={disp}/>
  <div className={"ButtonContainer"}>
    <Button label={9} onClick={numberClickHandler}/>
    <Button label={8} onClick={numberClickHandler}/>
    <Button label={7} onClick={numberClickHandler}/>

    <Button label={6} onClick={numberClickHandler}/>
    <Button label={5} onClick={numberClickHandler}/>
    <Button label={4} onClick={numberClickHandler}/>

    <Button label={3} onClick={numberClickHandler}/>
    <Button label={2} onClick={numberClickHandler}/>
    <Button label={1} onClick={numberClickHandler}/>

    <Button label={0} onClick={numberClickHandler}/>  
    <Button label={"RESET"} onClick={clearClickHandler}/>
    <Button label={"ENTER"} onClick={equalClickHandler}/>


    
    
    </div>
   </div>
    
  );
}

export default App;
