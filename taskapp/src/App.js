import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [tasks, fetchtask] = useState([])
  const getData = () => {
    fetch('http://127.0.0.1:8000/api/task-list/')
      .then((res) => res.json())
      .then((data) => {
        console.log('Data:', data)
        fetchtask(data)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div id="container">
        <div id="task-container">
          <div id="form-wrapper">
            <form id="form" >
              <div class="flex-wrapper">
                <div style={{flex: 6}}>
                  <input id="title" class="form-control" type="text" name="title" placeholder="Add task"/>
                </div>
                <div  style={{flex: 1}}>
                  <input id="submit" class="btn" type="submit" />
                </div>
              </div>
            </form>
          </div>
          <div class="list-wrapper">
              {tasks.map((task, i)=>{
              return <div key={i} className="task-wrapper flexwrapper">
                
                <div style={{flex:7}}>
                  <span>{task.title}</span>
                </div>
                
                <div style={{flex:1}}>
                  <button class="btn btn-sm btn-outline-info edit">Edit</button>
                </div>
                <div style={{flex:1}}>
                  <button class="btn btn-sm btn-outline-dark delete">Delete</button>
                </div>
               </div>
              })}
          </div>
        </div>
      </div>
      <ul>
        {tasks.map((task, i)=>{
          return <li key={i}>{task.title}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
