package com.codeclan.example.project_management_back_end.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
public class Task implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "time")
    private LocalTime time;

    @Column(name = "comment")
    private String comment;

    @Column(name = "priority")
    private TaskType priority;

    @Column(name = "completed")
    private Boolean completed;

    @JsonIgnoreProperties(value = "tasks")
    @ManyToOne
    @JoinColumn(name = "board_id", nullable = false)
    private Board board;

    public Task(LocalDate date, LocalTime time, String comment, TaskType priority, Boolean completed, Board board) {
        this.date = date;
        this.time = time;
        this.comment = comment;
        this.priority = priority;
        this.completed = completed;
        this.board = board;
    }

    public Task(){

    }

    //  Getters, and setters..

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public TaskType getPriority() {
        return priority;
    }

    public void setPriority(TaskType priority) {
        this.priority = priority;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public Board getBoard() {
        return board;
    }

    public void setBoard(Board board) {
        this.board = board;
    }


    //    Key functions..


}
