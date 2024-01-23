import {useMyhook} from './CustomHook/useCustomhook'
import './App.css'

function App() {
  const { active, handleactive, handlefalse, handletrue } = useMyhook();

  return (
    <>
      <button onClick={handleactive}>diferente</button>
      <button onClick={handletrue}>true</button>
      <button onClick={handlefalse}>false</button>
      <h1>{active.toString()}</h1>
      
      <Showinfo/>
    </>
  );
}


function Showinfo() {

  const {active,handleactive} = useMyhook()

  return(
    <div style={{color: "white", marginTop:'10px'}}> 
      <button onClick={() => handleactive()}>Show/Hide</button>
      {active &&(
        <div>
          <h2>Mi primer custom hook</h2>
        </div>
      )}
    </div>
  )
  
  
}

export default App