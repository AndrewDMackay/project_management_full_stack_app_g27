package com.codeclan.example.project_management_back_end.components;

import com.codeclan.example.project_management_back_end.models.Board;
import com.codeclan.example.project_management_back_end.repositories.BoardRepository;
import com.codeclan.example.project_management_back_end.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

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
        Board testBoard1 = new Board("TestBoardName", "TestBoardComment");
        boardRepository.save(testBoard1);


    }
}
