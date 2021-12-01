package com.codeclan.example.project_management_back_end.models;

import javax.persistence.Entity;
import java.io.Serializable;

@Entity
@Table(name = "tasks")
public class Task implements Serializable {

    private Long id;
}
