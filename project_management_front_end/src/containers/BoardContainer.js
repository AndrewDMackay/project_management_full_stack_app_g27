import React, { useState } from 'react'
import {Route, Switch} from 'react-router-dom';

const BoardContainer = () => {

    const [boards, setBoards] = useState([]);
    const [tasks, setTasks] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const boardPromise = request.get('/api/boards')
        const taskPromise = request.get('/api/tasks')
    
        Promise.all([taskPromise, boardPromise])
        .then((data) => {
            setTasks(data[0]);
            setBoards(data[1]);
        })
    }

    useEffect(()=>{
    requestAll()
    }, [])


//  Board functions.. 

    const findBoardById = function(id){
    return boards.find((board) => {
        return board.id === parseInt(id);
    })
    }

    const handleDeleteBoard = function(id){
    const request = new Request();
    const url = "/api/boards/" + id
    request.delete(url)
    .then(() => window.location = "/boards")
    }

    const handlePostBoard = function(board){
    const request = new Request();
    request.post("/api/boards", board)
    .then(() => window.location = '/boards')
    }

    const handleUpdateBoard = function(board){
    const request = new Request();
    request.patch('/api/boards/' + board.id, board)
    .then(() => {
        window.location = '/boards/' + board.id
    })
    }


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

    if(!boards){
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


        // May not be needed with a Java back-end.. 

    // const [boards, setBoards] = useState(null)
    // const [selectedBoard, setSelectedBoard] = useState(null)

    // const onBoardClick = function (board) {
    //     fetch()
    //         .then(res => res.json())
    //         .then(data => setSelectedBoard(data))
    // }

    // const onHomeClick = function () {
    //     setSelectedBoard(null);
    // }

