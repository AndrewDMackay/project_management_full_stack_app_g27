package com.codeclan.example.project_management_back_end.components;

import com.codeclan.example.project_management_back_end.models.Board;
import com.codeclan.example.project_management_back_end.models.Task;
import com.codeclan.example.project_management_back_end.models.TaskType;
import com.codeclan.example.project_management_back_end.repositories.BoardRepository;
import com.codeclan.example.project_management_back_end.repositories.TaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BoardRepository boardRepository;

    @Autowired
    TaskRepository taskRepository;

    public DataLoader(){

    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Board testBoard1 = new Board("Test Board 1", "Test board comment 1..");
        boardRepository.save(testBoard1);

        Board testBoard2 = new Board("Test Board 2", "Test board comment 2..");
        boardRepository.save(testBoard2);

        Board testBoard3 = new Board("Test Board 3", "Test board comment 3..");
        boardRepository.save(testBoard3);

        Task testTask1 = new Task("2021-12-01", "12-00-00-00", "Test task comment 1..", TaskType.LOW, false, testBoard1);
        taskRepository.save(testTask1);
    }
}
