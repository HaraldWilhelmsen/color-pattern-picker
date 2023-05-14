import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";
import img10 from "./img/img10.jpg";
import img11 from "./img/img11.jpg";
import { useEffect, useState } from "react";


const Tile = ({ img }: { img: any}) => {
  return <img src={img} alt="img" style={{ height: "100px", width: "100px", }} draggable={true}/>
}

const Tiles = ({numberOfRows}: {numberOfRows: number}) => {
  
  const [tiles, setTiles] = useState<JSX.Element[]>([])
  const [rows, setRows] = useState<JSX.Element[]>([])

  useEffect(() => {
    let numberOfTiles = numberOfRows * numberOfRows;
    let temp_tiles = []
    for (let i = 0; i < numberOfTiles; i++) {
      temp_tiles.push(<Tile img={imgFromIndex(i)} key={i}/>)
    }
    setTiles(temp_tiles)


  }, [numberOfRows]) 

  useEffect(() => {
    let temp_rows = []
    for (let i = 0; i < numberOfRows; i++) {
      temp_rows.push(<Row startIndex={i * numberOfRows} endIndex={(i + 1) * numberOfRows} tiles={tiles} key={i*numberOfRows}></Row>)
    }
    setRows(temp_rows)
  }, [tiles])

  if (!tiles) {
    return <h1> Laster in ...</h1>
  }



  const shuffle = () => {
    tiles && setTiles(prev => {
      return [...prev.sort(() => .5 - Math.random())]})
  }



  return (
    <div className="App">
      <div style={{ display: "flex", gap: "10px", marginBottom: "50px" }}>
        {
          rows
        }
      </div>

      <button onClick={shuffle} >Shuffle</button>
    </div>
  );


  
}

const Row = ({ startIndex, endIndex, tiles }: { startIndex: number, endIndex: number, tiles: JSX.Element[] }) => {

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      {
        tiles.slice(startIndex, endIndex)
      }
    </div>
  )
}
export default Tiles;

const imgFromIndex = (index: number) => {
  switch (index % 11) {
    case 0:
      return img1
    case 1:
      return img2
    case 2:
      return img3
    case 3:
      return img4
    case 4:
      return img5
    case 5:
      return img6
    case 6:
      return img7
    case 7:
      return img8
    case 8:
      return img9
    case 9:
      return img10
    case 10:
      return img11
  }
}
