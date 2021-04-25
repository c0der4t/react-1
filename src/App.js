//Importing .js files as components
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  //We process and compile any data as required.
  const [showAddForm, setshowAddForm] = useState(false)
  const [tasks, settasks] = useState(
    [
        {
            id: 1,
            text: 'Learn React Basics',
            day: 'May 29th at 2:30pm',
            reminder: false
        },
        {
            id: 2,
            text: 'Build a twitter bot',
            day: 'May 29th at 2:30pm',
            reminder: false
        },
        {
            id: 3,
            text: 'Rebuild dev portfolio',
            day: 'May 29th at 2:30pm',
            reminder: false
        }
    ]
    )

    //Add a Task
    const addTask = (task) =>{
const id = Math.floor(Math.random() * 10000) + 1
const newTask = {id,...task}
settasks([...tasks,newTask])
setshowAddForm(false);

    }

    //Delete a Task
    const deleteTask = (id) =>{
      settasks(tasks.filter((task) => task.id !== id))
    }

    //Add/Remove Reminder on a Task
    const toggleReminder = (id) =>{
      settasks(tasks.map(
        (task) => task.id === id ? {...task,reminder : !task.reminder} : task
      ))
    }

  //Sends back the data that we compiled/procesed above
  return (
    <div>
    <Header title='Dev Bucket List' AddButtonText={showAddForm} ShowAddClicked={() => setshowAddForm(!showAddForm)}></Header>
    {showAddForm && <AddTask onAddClicked = {addTask}/>}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
    onToggle={toggleReminder}></Tasks>:
    <h3>No Items To Show</h3>}
    </div>
  );
}

export default App;
