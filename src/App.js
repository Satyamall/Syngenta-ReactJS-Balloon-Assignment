
import './App.css';
import { useState } from "react";
import randomcolor from 'randomcolor';

// Total number circles inside an array with id, randomcolor(),and show options.
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

  // it contains the total circles
  const [circles, setCircles] = useState(totalCircles)

  // it contain the input text in numeric value
  const [text, setText] = useState(null);

  // This function show circles inside the empty box
  const handleShowInEmptyBox = () => {
    const showCircleToEmptyBox = circles.map((circle) => circle.id === Number(text) ? { ...circle, show: false } : circle)
    setCircles(showCircleToEmptyBox);
  }

  // This function hide the circle from empty box and show the circle on its original position.
  const handleRemoveCricle = (id) => {
    const removeCircleFromEmptyBox = circles.map((circle) => circle.id === Number(id) ? { ...circle, show: true } : circle)
    setCircles(removeCircleFromEmptyBox);
  }

  return (
    <div className="App">
      <h1>Syngenta React JS Balloon Assignment</h1>

      {/* This is Main Box which contains hole code for all operations of circles */}
      <div className='main-box'>

        {/* This is Empty box code to show and remove circle inside it  */}
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

        {/* This is 5 circles box which contains the circles */}
        <div className='box'>
          <h3>{circles.length} Circles</h3>
          {circles?.filter((v) => v.show === true).map((circle) => {
            return <div key={circle.id} className='circle' style={{ background: `${circle.color}` }}></div>
          })
          }
        </div>

        {/* This Box contains the input text which take number as input and shoot button */}
        <div className='box'>
          <h3>A Text Box</h3>
          <input type="number" placeholder="Enter number between 1 to 5" min="1" max={circles.length} className='input-box'
            onChange={(e) => setText(e.target.value)}
          />
          <div>
            <button className='btn' onClick={handleShowInEmptyBox}>Shoot</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
