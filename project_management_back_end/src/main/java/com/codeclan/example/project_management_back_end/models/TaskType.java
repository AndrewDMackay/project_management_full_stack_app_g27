package com.codeclan.example.project_management_back_end.models;

public enum TaskType {

    //    Holds data for Task priority, as below..

    LOW(1),
    MEDIUM(2),
    HIGH( 3);

    private final int priority;

    TaskType(int priority) {
        this.priority = priority;
    }

    public int getPriority() {
        return priority;
    }
}
