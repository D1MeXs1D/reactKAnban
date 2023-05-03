import React from 'react';
import style from '../../style/body/body.module.css';
import { arrayColumns } from '../../arraysWithObjects/columns';
import { useState } from 'react';


export default function Body() {

  const [array, setarray] = useState(arrayColumns)
  console.log(array)
  setarray(array => array[0].task[{nameTask: '312312'}])

  return (
    <div className={style.main}>
      {array.map((item) => {

        return <div className={style.column}>
            <div className={style.tittle}>{item.name}</div>

            {item.task.length === 0 
            ? 
              <div className={style.mesageForNullTask}>Issues are missing</div> 
            :
              item.task.map((taskCard, index)=> {
                return  <div className={style.task} key={index}>
                          {taskCard.nameTask}
                        </div>
              })
            }
            {item.name === "Backlog" 
            ?  
              <>
                <div className={style.buttonAddTask}>+ Add card</div>
                  <div className={style.addTask}>
                    <h3>Adding an issue</h3>  
                    <input type="text" placeholder='Enter the task name'/>
                    <textarea placeholder='Task description'></textarea>
                  </div> 
              </>
            :
              <>  <div className={style.button}>+ Add card</div> </> 
              }
          </div>
      })}
     
    </div>
  )
}
