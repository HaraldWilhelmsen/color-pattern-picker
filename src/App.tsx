import { useState } from "react";

const Tile = ({ color }: { color: string }) => {
  return <div style={{ height: "40px", width: "40px", backgroundColor: color, display: "flex" }}>
  </div>
}
function App() {
  const [tiles, setTiles] = useState<string[]>(
    [
      "#e6194B",
      "#469990",
      "#000075",
      "#bfef45",
      "#3cb44b",
      "#42d4f4",
      "#911eb4",
      "#808000",
      "#dcbeff",
    ]
  )

  const shuffle = () => {
    setTiles(prev => [...prev.sort( () => .5 - Math.random())])
    console.log("HERERE")
  }

  console.log("Render")
  return (
    <div className="App">
      <div style={{ display: "flex", gap: "10px", marginBottom: "50px"}}>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column"}}>
          <Tile color={tiles[0]} />
          <Tile color={tiles[1]} />
          <Tile color={tiles[2]} />
        </div>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column"}}>
          <Tile color={tiles[3]} />
          <Tile color={tiles[4]} />
          <Tile color={tiles[5]} />
        </div>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column"}}>
          <Tile color={tiles[6]} />
          <Tile color={tiles[7]} />
          <Tile color={tiles[8]} />
        </div>
      </div>

      <button onClick={shuffle} >Shuffle</button>
    </div>
  );
}

export default App;
