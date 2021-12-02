package com.codeclan.example.project_management_back_end.controller;

import com.codeclan.example.project_management_back_end.models.Task;
import com.codeclan.example.project_management_back_end.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {

    @Autowired
    TaskRepository taskRepository;

    @GetMapping(value = "/tasks")
    public ResponseEntity<List<Task>> getAllTasks(){
        return new ResponseEntity<>(taskRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/tasks/{id}")
    public ResponseEntity getTask(@PathVariable Long id){
        return new ResponseEntity<>(taskRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/tasks")
    public ResponseEntity<Task> postTask(@RequestBody Task task){
        taskRepository.save(task);
        return new ResponseEntity<>(task, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/tasks/{id}")
    public ResponseEntity<Task> updateTask(@RequestBody Task task){
        taskRepository.save(task);
        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    @DeleteMapping(value = "/tasks/{id}")
    public ResponseEntity<Task> deleteTask(@PathVariable Long id) {
        Task found = taskRepository.getOne(id);
        taskRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
