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

        // Boards to load..

        Board testBoard1 = new Board("Test Board 1", "Test board comment 1..");
        boardRepository.save(testBoard1);

        Board testBoard2 = new Board("Test Board 2", "Test board comment 2..");
        boardRepository.save(testBoard2);

        Board testBoard3 = new Board("Test Board 3", "Test board comment 3..");
        boardRepository.save(testBoard3);

        // Tasks to load, Test Board 1..

        LocalDate dateTask1 = LocalDate.of(2021, 12, 1);
        LocalTime timeTask1 = LocalTime.of(12, 00);

        Task testTask1 = new Task(dateTask1, timeTask1, "Test task comment 1..", TaskType.LOW, testBoard1);
        taskRepository.save(testTask1);

        LocalDate dateTask2 = LocalDate.of(2021, 12, 3);
        LocalTime timeTask2 = LocalTime.of(13, 00);

        Task testTask2 = new Task(dateTask2, timeTask2, "Test task comment 2..", TaskType.LOW, testBoard1);
        taskRepository.save(testTask2);

        LocalDate dateTask3 = LocalDate.of(2021, 12, 3);
        LocalTime timeTask3 = LocalTime.of(14, 00);

        Task testTask3 = new Task(dateTask3, timeTask3, "Test task comment 3..", TaskType.LOW, testBoard1);
        taskRepository.save(testTask3);

        // Tasks to load, Test Board 2..

        LocalDate dateTask4 = LocalDate.of(2021, 12, 1);
        LocalTime timeTask4 = LocalTime.of(12, 00);

        Task testTask4 = new Task(dateTask4, timeTask4, "Test task comment 4..", TaskType.LOW, testBoard2);
        taskRepository.save(testTask1);

        LocalDate dateTask5 = LocalDate.of(2021, 12, 3);
        LocalTime timeTask5 = LocalTime.of(13, 00);

        Task testTask5 = new Task(dateTask5, timeTask5, "Test task comment 5..", TaskType.LOW, testBoard2);
        taskRepository.save(testTask5);

        LocalDate dateTask6 = LocalDate.of(2021, 12, 3);
        LocalTime timeTask6 = LocalTime.of(14, 00);

        Task testTask6 = new Task(dateTask6, timeTask6, "Test task comment 6..", TaskType.LOW, testBoard2);
        taskRepository.save(testTask6);

        // Tasks to load, Test Board 3..

        LocalDate dateTask7 = LocalDate.of(2021, 12, 1);
        LocalTime timeTask7 = LocalTime.of(12, 00);

        Task testTask7 = new Task(dateTask7, timeTask7, "Test task comment 7..", TaskType.LOW, testBoard3);
        taskRepository.save(testTask7);

        LocalDate dateTask8 = LocalDate.of(2021, 12, 3);
        LocalTime timeTask8 = LocalTime.of(13, 00);

        Task testTask8 = new Task(dateTask8, timeTask8, "Test task comment 8..", TaskType.LOW, testBoard3);
        taskRepository.save(testTask8);

        LocalDate dateTask9 = LocalDate.of(2021, 12, 3);
        LocalTime timeTask9 = LocalTime.of(14, 00);

        Task testTask9 = new Task(dateTask9, timeTask9, "Test task comment 9..", TaskType.LOW, testBoard3);
        taskRepository.save(testTask9);
    }
}
