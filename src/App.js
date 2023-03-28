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
  
  const[disp, setDisp] = useState(0);
  const[num1, setNum1] = useState(null);
  const[oper, setOper] = useState(null);
  const[num2, setNum2] = useState(null);
  
  const numberClickHandler = (e) => {
    e.preventDefault();
    
    const value = e.target.innerHTML;
    if(oper === null){
      if(num1 === null){
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1+value);
        setDisp(num1+value);
      }
    } else {
      if(num2 === null){
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2+value);
        setDisp(num2+value);
      }
      
    console.log(num1 + " | " + oper + " | " + num2);
    }
    

  }
  

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    setDisp(value);
    
    console.log(num1 + " | " + oper + " | " + num2);
  }
  

  const equalClickHandler = (e) => {
    e.preventDefault();
    
    if (oper === "+") {
      setDisp(parseInt(num1) + parseInt(num2));
    }
    else if (oper === "-") {
      setDisp(parseInt(num1) - parseInt(num2));
    }
    else if (oper === "*") {
      setDisp(parseInt(num1) * parseInt(num2));
    }
    else if (oper === "÷") {
      setDisp(parseInt(num1) / parseInt(num2));
    } else { 
      setDisp("ERROR");
    }


    
  }
  
  const clearClickHandler = (e) => {
    e.preventDefault();
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOper(null);
  }
  
  return (
  <div className="Calculator">
  
      <Display display={disp}/>
  <div className={"ButtonContainer"}>
    <Button label={7} onClick={numberClickHandler}/>
    <Button label={8} onClick={numberClickHandler}/>
    <Button label={9} onClick={numberClickHandler}/>
    <Button label={"+"} onClick={operatorClickHandler}/>
    <Button label={4} onClick={numberClickHandler}/>
    <Button label={5} onClick={numberClickHandler}/>
    <Button label={6} onClick={numberClickHandler}/>
    <Button label={"-"} onClick={operatorClickHandler}/>
    <Button label={1} onClick={numberClickHandler}/>
    <Button label={2} onClick={numberClickHandler}/>
    <Button label={3} onClick={numberClickHandler}/>
    <Button label={"*"} onClick={operatorClickHandler}/>
    <Button label={"C"} onClick={clearClickHandler}/>
    <Button label={0} onClick={numberClickHandler}/>  
    <Button label={"="} onClick={equalClickHandler}/>
    <Button label={"÷"} onClick={operatorClickHandler}/>
    
    
    </div>
   </div>
    
  );
}

export default App;
