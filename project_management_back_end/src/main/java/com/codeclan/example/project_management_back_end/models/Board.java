package com.codeclan.example.project_management_back_end.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "boards")
public class Board implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long  id;

    @Column(name = "name")
    private String name;

    @Column(name = "comment")
    private String comment;

    @JsonIgnoreProperties(value = "board")
    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY)
    private List<Task> tasks;

    public Board(String name, String comment) {
        this.name = name;
        this.comment = comment;
        this.tasks = new ArrayList<Task>();
    }

    public Board(){

    }

    //    Getters, and setters..

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

    //    Add, remove, etc..

    public void addTask(Task task) {
        this.tasks.add(task);
    }

    public void removeTask(Task task) {
        this.tasks.remove(task);
    }
}
