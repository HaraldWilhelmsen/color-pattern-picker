import { useState } from "react";
import Tiles from "./tiles";



function App() {
  const [numberOfRows, setNumberOfRows] = useState<number>(4)
  return <>
  <Tiles numberOfRows={numberOfRows}/>
  <button onClick={() => setNumberOfRows(n => n+1)}>+</button>
  <button onClick={() => setNumberOfRows(n => n-1)}>-</button>
  </>
}

export default App;
