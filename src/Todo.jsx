import React, { useEffect, useState } from "react";

const Todo = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([])
  const [erroMessage, seterroMessage] = useState("")
  const submitHandler =(e) =>{
    e.preventDefault()

    if (!task.trim() || !desc.trim()){
     return seterroMessage("What's Your Task ?");
      
  }
   setmainTask([...mainTask, {task, desc}])
   console.log(task)
   console.log(desc)
    settask("");
    setdesc("");
    console.log()

  };
  const deleteHandler = (i) =>{
    let copytask =[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }
  useEffect(()=>{
    if (mainTask.length > 0) {
      console.log("Current Tasks:", mainTask)
      
    }
  },[mainTask])
  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map ((t, i)=>{
        return(
        <li key={i} className="flex items-center justify-between ">
         <div className=" flex justify-between w-2/3">
        <h5 className="text-2xl font-semibold justify-between">{t.task}</h5>
        <h6 className="text-xl font-semibold justify-between ">{t.desc}</h6>
        </div>
        <button onClick={()=>{deleteHandler(i)}} className="bg-red-500 rounded-[10px] h-7 w-20 text-white"  >Delete</button>
        </li>
        )
      })
  }
    return (
    <div>
      <>
        <h1 className="bg-black text-white justify-center flex items-center w-full h-[70px] font-semibold   text-3xl">
          Todo-List
        </h1>
        <form className="" onSubmit={submitHandler}>
          <input
            className="border-2 text-2xl border-zinc-800 m-4 "
            type="text"
            placeholder="Enter Task"
            value={task}
            
            onChange={(e)=>{
                settask(e.target.value)
            }}
          />
          <input
            className="border-2 text-2xl border-black"
            type="text"
            placeholder="Enter Description"
            value={desc}
            onChange={(e)=>{
                setdesc(e.target.value)
            }}
          />
          <button className="bg-black text-white w-20 h-7 rounded-xl flex items-center justify-center ">
            Submit
          </button>
        </form>
        <hr />
        <div className="p-8 bg-white">
            <ul>
                {renderTask}
            </ul>
        </div>
      </>
    </div>
  );
};

export default Todo;
