import React from 'react'
import { useState } from 'react'

const App = () => {
  

  const [todolist, setTodolist] = useState([])

  const submiiHandaler = (e) => {
    e.preventDefault()

    let todoname = e.target.todoname.value;
 

    
    if(!todolist.includes(todoname)){
      let finaltodo = [...todolist, todoname];
      setTodolist(finaltodo)
    }else{
      alert('already exsite')
    }
     



  }

  return (
    <div className='text-center mt-5'>
      <h1 className=' text-4xl font-bold' >To-do-App</h1>
      <form  onSubmit={submiiHandaler}>
        <input type="text" name='todoname'  className='mt-6 border rounded-sm min-w-[500px] p-2 mr-2' placeholder='ADD YOUR TODO'/>
         <button className=' bg-blue-600 py-2 px-3 text-white text-[18px] rounded-sm'>save</button>
      </form>

      <ul >
          
       {
        todolist.map((todo, index) => {
          return <Singleitem todo = {todo} key={index} indexNumber = {index} todolist = {todolist} setTodolist = {setTodolist}  />
        })
       }

      </ul>




    </div>
  )
}

export default App






const Singleitem = ({todo,setTodolist, todolist,indexNumber }) =>{


const deleteRow = () => {



  let finalData = todolist.filter((v, i)=> i != indexNumber)
  setTodolist(finalData)

}



const [status, setStatus] = useState(false)
  
    
 const clickFun = () => {
  setStatus(!status)
 }

  return(
    <li onClick={clickFun}  className=  {` bg-blue-600 text-2xl flex justify-between  items-center text-white max-w-[564px] rounded-sm mx-auto mt-6 p-1 ${status ? 'line-through' : ''} `}>  {todo}  <span onClick={deleteRow} className='text-3xl  mr-3'>&times;</span> </li>
  )
}


