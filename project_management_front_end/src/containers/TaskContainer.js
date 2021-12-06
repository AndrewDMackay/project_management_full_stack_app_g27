import React, {useState, useEffect} from 'react';

const TaskContainer = () => {

    return (
        <>
            <div className="main-nav-bar-container">
                <NavBar />
            </div>
            <div className="task-container">
                <h1>Task Container</h1>
                <p>I am the Task Container..</p>
            </div>
        </>
    )

}


//     const [tasks, setTasks] = useState([]);
//     const [boards, setBoards] = useState([]);

//     const requestAll = function(){
//         const request = new Request();
//         const taskPromise = request.get('/api/tasks')
    
//         Promise.all([taskPromise, ])
//         .then((data) => {
//             setTasks(data[1]);
//         })
//     }

//     useEffect(()=>{
//     requestAll()
//     }, [])


// //  Task functions.. 

//     const findTaskById = function(id){
//     return tasks.find((task) => {
//         return task.id === parseInt(id);
//     })
//     }

//     const handleDeleteTask = function(id){
//     const request = new Request();
//     const url = "/api/tasks/" + id
//     request.delete(url)
//     .then(() => window.location = "/tasks")
//     }

//     const handlePostTask = function(task){
//     const request = new Request();
//     request.post("/api/tasks", task)
//     .then(() => window.location = '/tasks')
//     }

//     const handleUpdateTask = function(task){
//     const request = new Request();
//     request.patch('/api/tasks/' + task.id, task)
//     .then(() => {
//         window.location = '/tasks/' + task.id
//     })
//     }

//     if(!tasks){
//     return null
//     }

//     return(
        
//         <>
//         {/* <Switch> */}
//         <Routes>
//             <Route exact path = '/tasks/new' render={() =>{
//             return <TaskForm boards={boards} onCreate={handlePostTask}/>
//             }}/> 

//             <Route exact path="/tasks/:id/edit" render={(props) =>{
//             const id = props.match.params.id;
//             const task = findTaskById(id);
//             return <TaskForm task={task} boards={boards} onUpdate={handleUpdateTask}/>
//             }}/>  

//             <Route exact path="/tasks/:id" render={(props) =>{
//             const id = props.match.params.id;
//             const task = findTaskById(id);
//             return <TaskDetail task={task}
//             onDelete={handleDeleteTask}
//             onUpdate={handleUpdateTask} 
//             />
//             }}/>

//             <Route render={() => {
//             return <TaskList tasks={tasks}/>
//             }} />
//         </Routes>
//         {/* </Switch> */}
//         </>
//     )
//   }


// export default TaskContainer;

