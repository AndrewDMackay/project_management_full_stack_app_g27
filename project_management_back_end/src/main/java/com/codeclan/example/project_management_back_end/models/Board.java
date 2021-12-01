package com.codeclan.example.project_management_back_end.models;

import java.util.ArrayList;
import java.util.List;

public class Board {

    private Long  id;
    private String name;
    private String comment;

    private List<Task> tasks;

    public Board(String name, String comment) {
        this.name = name;
        this.comment = comment;
        this.tasks = new ArrayList<Task>();
    }

    public Board(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public void addTask(Task task) {
        this.tasks.add(task);
    }
}
