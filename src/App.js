import React from "react"
import LeftCompo from "./components/LeftCompo";
import CenterCompo from "./components/CenterCompo"
import RightCompo from './components/RightCompo'

function App(){
  return(
    <div id="twitter" >
      <LeftCompo/>
      <CenterCompo/>
      <RightCompo/>
      
    </div>
  );
}
export default App;