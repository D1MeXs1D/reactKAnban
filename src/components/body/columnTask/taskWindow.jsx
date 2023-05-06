import React from 'react'
import { useParams} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function TaskWindow() {
    const {id} = useParams(); 
    const [task, setTask] = useState();

    const arrayColumnsForTask = JSON.parse(localStorage.getItem('task'));


    useEffect(() => {
        arrayColumnsForTask.map(indexColumn => {
            // console.log(i)
            indexColumn.task.map(j => {
                if(j.id == id) {
                    setTask(task => task = {})
                    console.log(j)
                }
            })
        })
        // setTask(task => task = arrayColumnsForTask)
    }, [id])


    
  return (
    <div>
        {console.log(`${task}`)}
    </div>
  )
}
