import './App.css';

function Mendoza({text}) {
  return (
    <div className="Mendoza">
      {text}
    </div>    
  );
}





function Mendoza2() {
  return (
    <div class="Mendoza2">
      <div class="flex-container">
        <div class="flex-container-left">
          <div class="item1">1</div>
          <div class="item2">2</div>
        </div>
        <div class="flex-container-right">
          <div class="item3">3</div>  
          <div class="item4">4</div>
        </div>
      </div>  
      <div class="grid-container">
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>  
      <div class="item8">8</div>
      </div>  
    </div>   
  );
}




export default function App() {
  return (
    <div>
      <Mendoza text={"JP Mendoza"}/>
      <Mendoza2 />
    </div>
  );
}
