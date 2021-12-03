import React, { useState } from 'react'
import {Route, Switch} from 'react-router-dom';

const TaskContainer = () => {

    const [tasks, setTasks] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const taskPromise = request.get('/api/tasks')
    
        Promise.all([askPromise, ])
        .then((data) => {
            setTasks(data[1]);
        })
    }

    useEffect(()=>{
    requestAll()
    }, [])


//  Task functions.. 

    const findTaskById = function(id){
    return tasks.find((task) => {
        return task.id === parseInt(id);
    })
    }

    const handleDeleteTask = function(id){
    const request = new Request();
    const url = "/api/tasks/" + id
    request.delete(url)
    .then(() => window.location = "/tasks")
    }

    const handlePostTask = function(task){
    const request = new Request();
    request.post("/api/tasks", task)
    .then(() => window.location = '/tasks')
    }

    const handleUpdateTask = function(task){
    const request = new Request();
    request.patch('/api/tasks/' + task.id, task)
    .then(() => {
        window.location = '/tasks/' + task.id
    })
    }

    if(!tasks){
    return null
    }

    return(
        
        <>
        <Switch>
            <Route exact path = '/tasks/new' render={() =>{
            return <TaskForm boards={boards} onCreate={handlePost}/>
            }}/> 

            <Route exact path="/tasks/:id/edit" render={(props) =>{
            const id = props.match.params.id;
            const task = findTaskById(id);
            return <TaskForm task={task} boards={boards} onUpdate={handleUpdate}/>
            }}/>  

            <Route exact path="/tasks/:id" render={(props) =>{
            const id = props.match.params.id;
            const task = findTaskById(id);
            return <TaskDetail task={task}
            onDelete={handleDelete}
            onUpdate={handleUpdate} 
            raids={raids} 
            />
            }}/>

            <Route render={() => {
            return <TaskList tasks={tasks}/>
            }} />
        </Switch>
        </>
    )
  }


export default BoardContainer;

