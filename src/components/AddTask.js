import {useState} from 'react'

function AddTask(props) {

//Process data and input
const [text, setText] = useState('')
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false)

const SubmitTask = (e) =>{
    e.preventDefault()

    if (!text) {
        alert('Item needs a name');
        return
    }

props.onAddClicked({text,day,reminder})

setText('');
setDay('');
setReminder(false);

}

//Output data
    return (
       <form className='add-form' onSubmit={SubmitTask}>

           <div className='form-control'>
           <label>Task</label>
           <input type='text' placeholder='Add New Item'
           value = {text}
           onChange={(e) => setText(e.target.value)}/>
           </div>
           
           <div className='form-control'>
           <label>Day and Time</label>
           <input type='text' placeholder='Add Date'
           value = {day}
           onChange={(e) => setDay(e.target.value)}/>
           </div>
           
           <div className='form-control-check'>
           <label>Add Reminder?</label>
           <input type='checkbox'
           checked={reminder}
           value = {reminder}
           onChange={(e) => setReminder(e.currentTarget.checked)}/>
           </div>

           <input className='btn btn-block' type='submit' value='Add Item'/>
           

       </form>
    )
}

export default AddTask
