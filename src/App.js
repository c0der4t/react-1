//Importing .js files as components
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  
  //We process and compile any data as required.
  const [showAddForm, setshowAddForm] = useState(false)
  const [tasks, settasks] = useState([])
  
  useEffect(() =>{
    
    const getList = async () =>{
      const serverresponse = await FetchList()
      settasks(serverresponse)
    }
    
    getList()
    
  },[])
  
  
  //Fetch List
  const FetchList = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    return data
  }
  
  //Fetch Single Item
  const FetchItem = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    
    return data
  }
  
  //Add a Task
  const addTask = async (task) =>{
    
    
    const serverresponse = await fetch(`http://localhost:5000/tasks`,{
    method : 'POST',
    headers :{
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(task)
  })
  
  
  const data = await serverresponse.json()
  
  settasks([...tasks,data])
  setshowAddForm(false);
  
}

//Delete a Task
const deleteTask = async (id) =>{
  
  await fetch(`http://localhost:5000/tasks/${id}`,{
  method : 'DELETE'
})

settasks(tasks.filter((task) => task.id !== id))
}

//Add/Remove Reminder on a Task
const toggleReminder = async (id) =>{
  const itemtoToggle = await FetchItem(id)
  const updatedInfo = {...itemtoToggle,reminder: !itemtoToggle.reminder}
  
  const response = await fetch(`http://localhost:5000/tasks/${id}`,{
  method : 'PUT',
  headers : {
    'Content-type' : 'application/json'
  },
  body : JSON.stringify(updatedInfo)
})

const data = await response.json()

settasks(tasks.map(
  (task) => task.id === id ? {...task,reminder : data.reminder} : task
  ))
}

//Sends back the data that we compiled/procesed above
return (
  <Router>
  <div>
  <Header title='Dev Bucket List' AddButtonText={showAddForm} ShowAddClicked={() => setshowAddForm(!showAddForm)}></Header>
  
  <Route path='/' exact render={(props) => (
    <>
    {showAddForm && <AddTask onAddClicked = {addTask}/>}
  {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
  onToggle={toggleReminder}></Tasks>:
  <h3>No Items To Show</h3>}
    </>
  )}/>
  <Route path='/about' component={About}/>
  <Footer/>
  </div>
  </Router>
  );
}

export default App;
