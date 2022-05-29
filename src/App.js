
import './App.css';
import { useState } from "react";
import randomcolor from 'randomcolor';

const totalCircles = [
  {
    id: 1,
    color: randomcolor(),
    show: true
  },
  {
    id: 2,
    color: randomcolor(),
    show: true
  },
  {
    id: 3,
    color: randomcolor(),
    show: true
  },
  {
    id: 4,
    color: randomcolor(),
    show: true
  },
  {
    id: 5,
    color: randomcolor(),
    show: true
  }
]

function App() {

  const [circles, setCircles] = useState(totalCircles)

  const [text, setText] = useState(null);

  const handleShow = () => {
    const addCircleToEmptyBox = circles.map((circle) => circle.id === Number(text) ? { ...circle, show: false } : circle)
    setCircles(addCircleToEmptyBox);
  }

  const handleRemoveCricle = (id) => {
    const removeCircleFromEmptyBox = circles.map((circle) => circle.id === Number(id) ? { ...circle, show: true } : circle)
    setCircles(removeCircleFromEmptyBox);
  }

  return (
    <div className="App">
      <h1>Syngenta React JS Balloon Assignment</h1>
      <div className='main-box'>
        <div className='box'>
          <h3>Empty Box</h3>
          <div className='empty-box'>
            {circles?.filter((v) => v.show === false).map((circle) => {
              return <button key={circle.id}
                className='circle'
                style={{ background: `${circle.color}` }}
                onClick={() => handleRemoveCricle(circle.id)}
              ></button>
            })
            }
          </div>
        </div>
        <div className='box'>
          <h3>{circles.length} Circles</h3>
          {circles?.filter((v) => v.show === true).map((circle) => {
            return <div key={circle.id} className='circle' style={{ background: `${circle.color}` }}></div>
          })
          }
        </div>
        <div className='box'>
          <h3>A Text Box</h3>
          <input type="number" placeholder="Enter number between 1 to 5" min="1" max={circles.length} className='input-box'
            onChange={(e) => setText(e.target.value)}
          />
          <div>
            <button className='btn' onClick={handleShow}>Shoot</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
