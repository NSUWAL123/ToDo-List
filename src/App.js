import { useState } from 'react';
import Heading from './Heading';
import Todolist from './Todolist';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [list, setList] = useState("");

  const changeEvent = (event) => {
    setList(event.target.value);
  };
  
  const listOfItems = () => {
    setItems((previousItem) => {
      return [...previousItem, list];
    });
    setList("");
  }

  const deleteItem = (id) => {
        console.log("del")
        setItems((previousItemArr) => {
          return previousItemArr.filter((arrElement, index) => {
            return index !== id;
          })
        })
    }

  return (
      <div className='outer_container'>
        <div className="inner_container">
          <Heading/>
          <div className="add-item">
            <input type="text" placeholder='Add an Item...' onChange={changeEvent} value={list}/>
            <div className="btn">
              <button onClick={listOfItems}>+</button>
            </div>
          </div>

          <ul>
            {items.map((indItem, index) => {
             return <Todolist text={indItem} key={index} id= {index} selectedItem={deleteItem}/>
            })}
          </ul>
        </div>
      </div> 
  );
}

export default App;
