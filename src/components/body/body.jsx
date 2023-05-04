import React from 'react';
import style from '../../style/body/body.module.css';
import { arrayColumns } from '../../arraysWithObjects/columns';
import { useState } from 'react';




export default function Body() {
  const [array, setArray] = useState(JSON.parse(localStorage.getItem('task')) || arrayColumns);
  const [styleAddTask, setStyle] = useState(false);
  const [inputValue, setInput] = useState('');
  const [textareaValue, setTextarea] = useState('');

  
  const addTask= (id) => {
    swapSetStyle();

    if (styleAddTask == true) {
         setArray(
          array.map(obj =>
          obj.index === id ? { ...obj, 
            task: [...obj.task, {nameTask: inputValue, taskDescription: textareaValue}]
          }: obj)
        ); 
        localStorage.setItem('task', JSON.stringify(array))
    }
  }


  function swapSetStyle () {
    setStyle(styleAddTask =>  styleAddTask === true ? styleAddTask = false : styleAddTask = true);
  }

  

  
  return (
    <div className={style.main}>
      {array.map((item) => 
      <div className={style.column}>
            <div className={style.tittle}>{item.name}</div>

            {item.task.length === 0 
            ? 
              <div className={style.mesageForNullTask}>Issues are missing</div> 
            :
              item.task.map((taskCard, index)=>  <div className={style.task} key={index}>
                          {taskCard.nameTask}
                        </div>)
            }
            {item.name === "Backlog" 
            ?  
              <>
                <div className={style.buttonAddTask} onClick={()=>addTask(item.index)}>+ Add card</div>
                  <div
                   className={styleAddTask == false ? style.addTask : style.AddTaskActive}
                  >
                    <h3>Adding an issue</h3>  
                    <input type="text" 
                    placeholder='Enter the task name'
                    onChange={(event) => setInput(event.target.value)}
                    />
                    <textarea 
                    placeholder='Task description'
                    onChange={(event) => setTextarea(event.target.value)}
                    ></textarea>
                  </div> 
              </>
            :
              <>  <div className={style.button}>+ Add card</div> </> 
              }
          </div>
      )}
    </div>
  )
}
